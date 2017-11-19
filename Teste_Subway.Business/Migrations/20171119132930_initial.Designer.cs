﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using TesteSubway.Business.Infra.EntityFramework;

namespace TesteSubway.Business.Migrations
{
    [DbContext(typeof(TesteSubwayContext))]
    [Migration("20171119132930_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TesteSubway.Entities.Client", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Address");

                    b.Property<DateTime>("Birth");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Phone");

                    b.HasKey("ID");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("TesteSubway.Entities.Purchase", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<int>("ClientID");

                    b.Property<DateTime>("Date");

                    b.Property<bool>("Paid");

                    b.Property<string>("Product")
                        .IsRequired();

                    b.Property<decimal>("Value");

                    b.HasKey("ID");

                    b.HasIndex("ClientID");

                    b.ToTable("Purchases");
                });

            modelBuilder.Entity("TesteSubway.Entities.Purchase", b =>
                {
                    b.HasOne("TesteSubway.Entities.Client", "Client")
                        .WithMany("Purchases")
                        .HasForeignKey("ClientID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}