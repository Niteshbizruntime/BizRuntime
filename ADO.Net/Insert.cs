using System;
using System.Data.SqlClient;
namespace ADODOTNET
{
    /// <summary>
    /// This is a Class
    /// "T:ADODOTNET.Insert"
    /// </summary>
    class Insert
    {
        static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CreateTable));

        /// <summary>
        /// "M:ADODOTNET.Insert.Connecting()"
        /// </summary>
        public void Connecting()
        {
            SqlConnection con = null;
            try
            {

                string constring = @"Data Source=.\SQLEXPRESS;Initial Catalog=Customer;"
                                  + "Persist Security Info=True;User ID=sa;Password=123456789";
                con = new SqlConnection(constring);
                con.Open();

                Console.WriteLine("Enter Student Details : ");
                do
                {    i:
                    Console.Write("Id     : ");
                    int id;
                    if(!(int.TryParse(Console.ReadLine(), out id)))
                        goto i;
                    Console.Write("Name   : ");
                    string name = Console.ReadLine();
                    Console.Write("Email  : ");
                    string email = Console.ReadLine();
                    Console.Write("J-Date : ");
                    string jd = Console.ReadLine();

                    SqlCommand cm = new SqlCommand("insert into student values(" + id + ",'" + name + "','" + email + "','" + jd + "')", con);
                    cm.ExecuteNonQuery();

                    Console.WriteLine("data Insrted Successfully");
                    Console.Write("Do U want to enter one more record press 1 : ");
                } while ((Console.ReadLine()).Equals("1"));

            }
            catch (SqlException e)
            {
                log.Error(e.Message);
            }
            finally
            {
                if (con != null)
                  con.Close();
            }

        }

        /// <summary>
        /// This is a main method entry point of Program
        /// "M:ADODOTNET.Insert.Main(system.string)"
        /// </summary>
        /// <param name="args"> it is string array</param>
        static void Main(string[] args)
        {
            log4net.Config.BasicConfigurator.Configure();
            new Insert().Connecting();
            Console.ReadKey();
        }
    }
}