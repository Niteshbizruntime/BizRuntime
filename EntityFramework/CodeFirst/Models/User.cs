using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace CodeFirst.Models
{
    [System.ComponentModel.DataAnnotations.Schema.Table("UserRecord")]
    public class User
    {
        [Key]
        public int UserId { get; set; }  
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Phone { get; set; }
        public string Address { get; set; }
       
    }
}