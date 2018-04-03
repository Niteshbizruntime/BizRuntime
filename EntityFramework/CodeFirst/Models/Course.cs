using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;


namespace CodeFirst.Models
{
    [System.ComponentModel.DataAnnotations.Schema.Table("CourseRecord")]
    public class Course
    {
        [Key]
        public int CourseId { get; set; }
        [Required]
        public string CourseName { get; set; }
        public string CourseDetail { get; set; }

        public User User { get; set; }
    }
}