using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace CodeFirst.Models
{
    public class RecordContext:DbContext
    {
        public RecordContext():base("NorthwindConnection")
        {
            
        }
        public DbSet<User> UserTable { set; get; }
        public DbSet<Course> CourseTable { set; get; }
    }
}