using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TesteSubway.Entities;

namespace TesteSubway.Business.Infra.EntityFramework
{
    public class TesteSubwayContext : DbContext
    {
        public TesteSubwayContext(DbContextOptions<TesteSubwayContext> options) : base(options) { }

        public static TesteSubwayContext Create()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TesteSubwayContext>();
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Database1;Trusted_Connection=True;MultipleActiveResultSets=true");

            return new TesteSubwayContext(optionsBuilder.Options);
        }

        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Purchase> Purchases { get; set; }
    }
}
