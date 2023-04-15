using System;
using System.Linq;
using AutoMapper;
using FuodBorne.Application.Models.DataContext;
using FuodBorne.Application5.Mapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace FuodBorne.WebApi5
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(policy =>
            {
                policy.AddPolicy("allowAll", p =>
                {
                    p.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            //var assemblies = AppDomain.CurrentDomain.GetAssemblies()
            //    .Where(a=>a.FullName.Contains("FuodBorne"));

            //services.AddAutoMapper(assemblies);



            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FuodBorne API", Version = "v1" });
                c.EnableAnnotations();
            });
            services.AddControllers();
            services.AddDbContext<FuodBorneDbContext>(cfg =>
            {
                cfg.UseSqlServer(Configuration.GetConnectionString("cString"));
            });

            services.AddAutoMapper(cfg =>
            {
                var profiles = AppDomain.CurrentDomain.GetAssemblies()
                    .Where(a => a.FullName.Contains("FuodBorne"))
                    .SelectMany(a => a.GetTypes())
                    .Where(t => typeof(Profile).IsAssignableFrom(t));

                var provider = services.BuildServiceProvider();

                var ctx = provider.GetRequiredService<IHttpContextAccessor>();

                foreach (var profile in profiles)
                {
                    if (typeof(FoudBorneProfile).IsAssignableFrom(profile))
                    {
                        var instance = profile.GetConstructor(new[] { typeof(IHttpContextAccessor) })
                        .Invoke(new object[] { ctx });

                        cfg.AddProfile(instance as Profile);
                        continue;
                    }
                    cfg.AddProfile(profile);
                }
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("allowAll");

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Seed();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

