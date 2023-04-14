using FuodBorne.Application.Models.DataContext;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("appsettings.json", optional: true);
var cString = builder.Configuration.GetConnectionString("cString");

builder.Services.AddControllers();
builder.Services.AddDbContext<FuodBorneDbContext>(cfg =>
{
    cfg.UseSqlServer(cString);
});

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();

app.MapControllers();

app.Run();

