using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CURDOperation.Models
{
    public class UserRecord
    {
        string connectionString = @"Data Source=.\SQLEXPRESS;Initial Catalog=CurdOperation;"
                                   + "Persist Security Info=True;User ID=sa;Password=123456789";

        //To View all employees details    
        //public IEnumerable<User> GetAllUser()
        //{
        //    List<User> lstuser = new List<User>();

        //    using (SqlConnection con = new SqlConnection(connectionString))
        //    {
        //        SqlCommand cmd = new SqlCommand("select * from UserRecord", con);
               

        //        con.Open();
        //        SqlDataReader rdr = cmd.ExecuteReader();

        //        while (rdr.Read())
        //        {
        //            User user = new User();

        //            user.ID = Convert.ToInt32(rdr["EmployeeID"]);
        //            user.UserName = rdr["UserName"].ToString();
        //            user.Email = rdr["Email"].ToString();
        //            user.Password = rdr["Password"].ToString();
        //            user.Phone = rdr["Phone"].ToString();
        //            user.Address = rdr["Address"].ToString();


        //            lstuser.Add(user);
        //        }
        //        con.Close();
        //    }
        //    return lstuser;
        //}

        //To Add new employee record    
        public void AddUser(User user)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                string str = "insert into UserRecord (UserName,Email,Password,Phone,Address) values('" + user.UserName + "','" + user.Email + "','" + user.Password + "','" + user.Phone + "','" + user.Address + "')";
                SqlCommand cmd = new SqlCommand(str, con);
               
                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        //To Update the records of a particluar employee  
        public bool LoginUser(Login user)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("select * from UserRecord where UserName='"+user.UserName+"' and Password='"+user.Password+"'", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    if (rdr["UserName"].ToString().Equals(user.UserName) && rdr["password"].ToString().Equals(user.Password))
                        return true;
                }
            }
            return false;
        }
        

        ////Get the details of a particular employee  
        //public Employee GetEmployeeData(int? id)
        //{
        //    Employee employee = new Employee();

        //    using (SqlConnection con = new SqlConnection(connectionString))
        //    {
        //        string sqlQuery = "SELECT * FROM tblEmployee WHERE EmployeeID= " + id;
        //        SqlCommand cmd = new SqlCommand(sqlQuery, con);

        //        con.Open();
        //        SqlDataReader rdr = cmd.ExecuteReader();

        //        while (rdr.Read())
        //        {
        //            employee.ID = Convert.ToInt32(rdr["EmployeeID"]);
        //            employee.Name = rdr["Name"].ToString();
        //            employee.Gender = rdr["Gender"].ToString();
        //            employee.Department = rdr["Department"].ToString();
        //            employee.City = rdr["City"].ToString();
        //        }
        //    }
        //    return employee;
        //}

        ////To Delete the record on a particular employee  
        //public void DeleteEmployee(int? id)
        //{

        //    using (SqlConnection con = new SqlConnection(connectionString))
        //    {
        //        SqlCommand cmd = new SqlCommand("spDeleteEmployee", con);
        //        cmd.CommandType = CommandType.StoredProcedure;

        //        cmd.Parameters.AddWithValue("@EmpId", id);

        //        con.Open();
        //        cmd.ExecuteNonQuery();
        //        con.Close();
        //    }
        //}
    }
}