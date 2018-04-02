using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CURDOperation.Models
{
    public class User
    {
       public int ID { set; get; }
        [Required(ErrorMessage ="Enter User Name")]
        [RegularExpression(@"^[A-Z a-z 0-9]{6,15}$", ErrorMessage = "Not a valid UserName")]
        public string UserName { set; get; }
        [Required(ErrorMessage = "Enter Email")]
        [RegularExpression(@"^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$", ErrorMessage = "Not a valid Email")]
        public string Email { set; get; }
        [Required(ErrorMessage = "Enter  Passsword")]
        [RegularExpression(@"(?=.*\d)(?=.*[@ $ # & * ]{2})(?=.*[A-Z])(?=.*[a-z]).{8,12}$", ErrorMessage = "Not a valid Password")]
        public string Password { set; get; }
        [Required(ErrorMessage = "Enter Phone Number ")]
        [RegularExpression(@"^[6-9][0-9]{9}$", ErrorMessage = "Not a valid Phone")]
        public string Phone { set; get; }
        //[Required(ErrorMessage = "Enter Address")]
        [RegularExpression(@"^[A-Z a-z]{1,20}$", ErrorMessage = "Not a valid Address")]
        public string Address { set; get; }

    }
}
