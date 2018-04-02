using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CURDOperation.Models
{
    public class Login
    {
        [Required (ErrorMessage ="Enter UserName")]
       public string UserName { set; get; }
        [Required(ErrorMessage = "Enter Password")]
       public string Password { set; get; }
        public string Message { set; get; }
    }
}
