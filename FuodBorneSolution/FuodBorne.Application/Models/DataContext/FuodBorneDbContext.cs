using System;
using FuodBorne.Application.Models.Entity;
using Microsoft.EntityFrameworkCore;

namespace FuodBorne.Application.Models.DataContext
{
	public class FuodBorneDbContext : DbContext
    {
		public FuodBorneDbContext(DbContextOptions options)
			:base(options)
		{
		}

		public DbSet<Category> Categories { get; set; }
		public DbSet<Service> Services { get; set; }
    }
}

