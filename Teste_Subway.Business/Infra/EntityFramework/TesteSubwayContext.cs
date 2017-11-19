using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;
using TesteSubway.Entities;

namespace TesteSubway.Business.Infra.EntityFramework
{
    public class TesteSubwayContext : DbContext
    {
        public const string connectionString = "Server=(localdb)\\mssqllocaldb;Database=Database1;Trusted_Connection=True;MultipleActiveResultSets=true";
        public TesteSubwayContext(DbContextOptions<TesteSubwayContext> options) : base(options) { }

        public static TesteSubwayContext Create()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TesteSubwayContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new TesteSubwayContext(optionsBuilder.Options);
        }

        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Purchase> Purchases { get; set; }
    }

    public class ContextFactory : IDesignTimeDbContextFactory<TesteSubwayContext>
    {
        public TesteSubwayContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<TesteSubwayContext>();
            optionsBuilder.UseSqlServer(TesteSubwayContext.connectionString);

            return new TesteSubwayContext(optionsBuilder.Options);
        }
    }
}
