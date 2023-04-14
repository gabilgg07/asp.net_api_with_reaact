using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace FuodBorne.Application.Models.DataContext
{
	public static  class FoudBorneDbSeed
	{
		public static IApplicationBuilder Seed(IApplicationBuilder builder)
		{
			using (var scope = builder.ApplicationServices.CreateScope())
			{
				var db = scope.ServiceProvider.GetRequiredService<FuodBorneDbContext>();

				InitCategories(db);
				InitServices(db);
            }
			return builder;
		}

        private static void InitServices(FuodBorneDbContext db)
        {
            var category = db.Categories.FirstOrDefault();
            int categoryId = category == null ? 1 : category.Id;

            if (!db.Services.Any())
            {
                db.Services.Add(new Entity.Service
                {
                    Name = "Fresh Fruits",
                    ImageUrl = "service_1.jpg",
                    Description = "Organically grown crops tend use natural fertilizers " +
                    "like manure to improve growth to plant . Animals raised organically are",
                    CategoryId = categoryId
                });
                db.Services.Add(new Entity.Service
                {
                    Name = "Fresh Vegetables",
                    ImageUrl = "service_2.jpg",
                    Description = "Organically grown crops tend use natural fertilizers " +
                    "like manure to improve growth to plant . Animals raised organically are",
                    CategoryId = categoryId
                });
                db.Services.Add(new Entity.Service
                {
                    Name = "Natural Wheats",
                    ImageUrl = "service_3.jpg",
                    Description = "Organically grown crops tend use natural fertilizers " +
                    "like manure to improve growth to plant . Animals raised organically are",
                    CategoryId = categoryId
                });

                db.SaveChanges();
            }
        }

        private static void InitCategories(FuodBorneDbContext db)
        {
			if (!db.Categories.Any())
            {
                db.Categories.Add(new Entity.Category
                {
                    Name = "Category 1"
                });
                db.Categories.Add(new Entity.Category
                {
                    Name = "Category 2"
                });

                db.SaveChanges();
            }
        }
    }
}

