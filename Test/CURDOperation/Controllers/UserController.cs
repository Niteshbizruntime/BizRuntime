using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CURDOperation.Models;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CURDOperation.Controllers
{
    public class UserController : Controller
    {
        UserRecord objemployee = new UserRecord();
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    List<User> lstUser = new List<User>();
        //    lstUser = objemployee.GetAllUser().ToList();

        //    return View(lstUser);


        //}

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        public ActionResult About()
        {


            return View();
        }

        public ActionResult Contact()
        {


            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Register([Bind] User user)
        {
            if (ModelState.IsValid)
            {
                objemployee.AddUser(user);
                return RedirectToAction("Login");
            }
            return View(user);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Login([Bind] Login login)
        {
            if (ModelState.IsValid)
            {

                if (objemployee.LoginUser(login))
                    return RedirectToAction("Home");
                else
                    login.Message = "Invalid UserName and Password";
            }
            return View(login);
        }

        //    [HttpGet]
        //    public IActionResult Edit(int? id)
        //    {
        //        if (id == null)
        //        {
        //            return NotFound();
        //        }
        //        Employee employee = objemployee.GetEmployeeData(id);

        //        if (employee == null)
        //        {
        //            return NotFound();
        //        }
        //        return View(employee);
        //    }

        //    [HttpPost]
        //    [ValidateAntiForgeryToken]
        //    public IActionResult Edit(int id, [Bind]Employee employee)
        //    {
        //        if (id != employee.ID)
        //        {
        //            return NotFound();
        //        }
        //        if (ModelState.IsValid)
        //        {
        //            objemployee.UpdateEmployee(employee);
        //            return RedirectToAction("Index");
        //        }
        //        return View(employee);
        //    }

        //    [HttpGet]
        //    public IActionResult Details(int? id)
        //    {
        //        if (id == null)
        //        {
        //            return NotFound();
        //        }
        //        Employee employee = objemployee.GetEmployeeData(id);

        //        if (employee == null)
        //        {
        //            return NotFound();
        //        }
        //        return View(employee);
        //    }

        //    [HttpGet]
        //    public IActionResult Delete(int? id)
        //    {
        //        if (id == null)
        //        {
        //            return NotFound();
        //        }
        //        Employee employee = objemployee.GetEmployeeData(id);

        //        if (employee == null)
        //        {
        //            return NotFound();
        //        }
        //        return View(employee);
        //    }

        //    [HttpPost, ActionName("Delete")]
        //    [ValidateAntiForgeryToken]
        //    public IActionResult DeleteConfirmed(int? id)
        //    {
        //        objemployee.DeleteEmployee(id);
        //        return RedirectToAction("Index");
        //    }
        //}
    }
}