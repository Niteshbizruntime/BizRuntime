using System;
using System.Data;
using System.Data.SqlClient;
namespace ADODOTNET
{
    /// <summary>
    /// This is a Class
    /// "T:ADODOTNET.Retrive"
    /// </summary>
    class Retrive
    {
        static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CreateTable));

        /// <summary>
        /// "M:ADODOTNET.Retrive.Connecting()"
        /// </summary>
        public void Connecting()
        {
            SqlConnection con = null;
            try
            {
                Console.Write("Enter Table Name : ");
                string tname = Console.ReadLine();

                string constring = @"Data Source=.\SQLEXPRESS;Initial Catalog=Customer;"
                              +"Persist Security Info=True;User ID=sa;Password=123456789";
                con = new SqlConnection(constring);
                con.Open();
                SqlCommand cm = new SqlCommand("select * from "+tname, con);
                SqlDataReader sdr = cm.ExecuteReader();
               
                for(int i=0;i< sdr.FieldCount;i++)
                {
                    Console.Write(sdr.GetName(i) + "\t");
                }
                Console.WriteLine("\n===============================================================");
                while (sdr.Read())
                {
                    for (int i = 0; i < sdr.FieldCount; i++)
                    {
                        Console.Write(sdr[i] + "\t");
                    }
                    Console.Write("\n");
                }
                Console.WriteLine("===============================================================");
               

            }
            catch (SqlException e)
            {
                log.Error(e.Message);
            }
            finally
            {
                if(con!=null)
                con.Close();
            }

        }

        /// <summary>
        /// This is a main method entry point of Program
        /// "M:ADODOTNET.Retrive.Main(system.string)"
        /// </summary>
        /// <param name="args"> it is string array</param>
        static void Main(string[] args)
        {
            log4net.Config.BasicConfigurator.Configure();
            new Retrive().Connecting();
            Console.ReadKey();
        }
    }
}