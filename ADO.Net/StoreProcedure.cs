using System;
using System.Data;
using System.Data.SqlClient;
namespace ADODOTNET
{
    /// <summary>
    /// This is a Class
    /// "T:ADODOTNET.StoreProcedure"
    /// </summary>
    class StoreProcedure
    {
        static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CreateTable));

        /// <summary>
        /// "M:ADODOTNET.StoreProcedure.Connecting()"
        /// </summary>
        public void Connecting()
        {
            Console.Write("Enter Student id ");
            int id = Convert.ToInt32(Console.ReadLine());
            int b=0;
            string constring = @"Data Source=.\SQLEXPRESS;Initial Catalog=Customer;"
                               + "Persist Security Info=True;User ID=sa;Password=123456789";
            SqlConnection con = new SqlConnection(constring);
            try
            {
                con.Open();
                SqlCommand cm = new SqlCommand("stu", con);
                cm.CommandType = CommandType.StoredProcedure;
                SqlParameter p = new SqlParameter("@id", SqlDbType.Int);
                p.Value = id;
                cm.Parameters.Add(p);
                b = cm.ExecuteNonQuery();
            }
            catch(SqlException ex)
            {
                log.Error(ex.Message);
            }
            finally
            {
                if (con != null)
                    con.Close();
            }
           
               
                if(b!=0)
                Console.WriteLine("Record Deleted  Successfully");
                else
                    Console.WriteLine("Record Not Found");

        }

        /// <summary>
        /// This is a main method entry point of Program
        /// "M:ADODOTNET.StoreProcedure.Main(system.string)"
        /// </summary>
        /// <param name="args"> it is string array</param>
        static void Main(string[] args)
        {
            log4net.Config.BasicConfigurator.Configure();
            new StoreProcedure().Connecting();
            Console.ReadKey();
        }
    }
}