using System;
using System.Data.SqlClient;
namespace ADODOTNET
{
    /// <summary>
    /// This is a Class
    /// "T:ADODOTNET.Delete"
    /// </summary>
    class Delete
    {
        static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CreateTable));

        /// <summary>
        /// "M:ADODOTNET.Delete.Connecting()"
        /// </summary>
        public void Connecting()
        {
            
            string constring = @"Data Source=.\SQLEXPRESS;Initial Catalog=Customer;"
                               +"Persist Security Info=True;User ID=sa;Password=123456789";
            using (SqlConnection con = new SqlConnection(constring))
            {

                con.Open();
                SqlCommand cm = new SqlCommand("Delete  from student where id=1", con);
                cm.ExecuteNonQuery();
               log.Error("Record Deleted  Successfully");

            }
           

        }

        /// <summary>
        /// This is a main method entry point of Program
        /// "M:ADODOTNET.Delete.Main(system.string)"
        /// </summary>
        /// <param name="args"> it is string array</param>
        static void Main(string[] args)
        {
            log4net.Config.BasicConfigurator.Configure();
            new Delete().Connecting();
            Console.ReadKey();
        }
    }
}