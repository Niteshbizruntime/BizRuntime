namespace EntityFrameworkDemo.Migrations
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<EntityFrameworkDemo.Models.RecordContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EntityFrameworkDemo.Models.RecordContext context)
        {
            var students = new List<Student>
            {
            new Student{Name="Mohan",Email="Samuai@example.com",Course="Java Technology", Contact="+25-258628"},
            new Student{Name="Rohan",Email="Sam@example.com",Course=".NET Technology", Contact="+25-258694"},
            new Student{Name="John",Email="Max@example.com",Course="Java Technology", Contact="+25-258999"},
            new Student{Name="Saba",Email="saba@example.com",Course="Linux Administration", Contact="+25-258111"},
            };
            students.ForEach(s => context.Students.Add(s));
            context.SaveChanges();
        }
    }
}
