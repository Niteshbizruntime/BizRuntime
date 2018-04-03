using CodeFirst.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CodeFirst.Controllers
{
    public class UserController : Controller
    {
        RecordContext rc = new RecordContext();
        public ActionResult Index()
        {
            rc.CourseTable.ToList();
            rc.UserTable.ToList();
            return View();
        }
        [HttpGet]
        public ActionResult Register()
        {

            return View();
        }

        public ActionResult Home()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Register([Bind] User user)
        {
           
            if (ModelState.IsValid)
            {
                int outp = rc.Database.ExecuteSqlCommand("insert into UserRecord (UserName,Password,Email,Phone,Address)values(" + "'" + user.UserName + "','" + user.Password + "','" + user.Email + "','" + user.Phone + "','" + user.Address + "')");
                if (outp > 0)
                    return RedirectToAction("Login");
            }

            return View(user);
        }

        [HttpGet]
        public ActionResult Login()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Login([Bind] Login log)
        {
           
            if (ModelState.IsValid)
            {
                var data=rc.UserTable.SqlQuery("Select UserName,Password from UserRecord where UserName='" + log.UserName + "' and Password='" + log.Password + "'");
                User[] u = data.ToArray();
                if(u[0].Equals(log.UserName) && u[1].Equals(log.Password))
                    return RedirectToAction("Home");
                else
                    log.Message = "Invalid UserName and Password";
            }
           
            return View(log);
        }

        public ActionResult Course()
        {

            return View();
        }


    }
}