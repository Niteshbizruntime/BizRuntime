using System;
using System.Data.SqlClient;
namespace ADODOTNET
{
    /// <summary>
    /// This is a Class
    /// "T:ADODOTNET.CreateTable"
    /// </summary>
    class CreateTable
    {
         
       static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CreateTable));

        /// <summary>
        /// "M:ADODOTNET.CreateTable.Connecting()"
        /// </summary>
        public void Connecting()
        {
            SqlConnection con = null;
            try
            {
                Console.Write("Enter Table Name : ");
                string tname = Console.ReadLine();
                Console.Write("Enter Field : ");
                string field = Console.ReadLine();

                string constring = @"Data Source=.\SQLEXPRESS;Initial Catalog=Customer;"
                                   +"Persist Security Info=True;User ID=sa;Password=123456789";
                con = new SqlConnection(constring);
                con.Open();
                SqlCommand cm = new SqlCommand("create table "+tname+"("+field+")", con);
                cm.ExecuteNonQuery();
          
                Console.WriteLine("Table created Successfully");
               
            }
            catch (SqlException e)
            {
                log.Error(e.Message);
            }
            finally
            {   if(con!=null)
                con.Close();
            }
            
        }

        /// <summary>
        /// This is a main method entry point of Program
        /// "M:ADODOTNET.CreateTable.Main(system.string)"
        /// </summary>
        /// <param name="args"> it is string array</param>
        static void Main(string[] args)
        {
            log4net.Config.BasicConfigurator.Configure();
            new CreateTable().Connecting();
            Console.ReadKey();
        }
    }
}