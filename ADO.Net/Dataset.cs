using System;
using System.Data;
using System.Data.SqlClient;
namespace ADODOTNET
{
    /// <summary>
    /// This is a Class
    /// "T:ADODOTNET.Dataset"
    /// </summary>
    class Dataset
    {
        static log4net.ILog log = log4net.LogManager.GetLogger(typeof(CreateTable));

        /// <summary>
        /// "M:ADODOTNET.Dataset.Connecting()"
        /// </summary>
        public void Connecting()
        {
            try
            {
                Console.Write("Enter Table Name : ");
                string tname = Console.ReadLine();

                string constring = @"Data Source=.\SQLEXPRESS;Initial Catalog=Customer;"
                                   + "Persist Security Info=True;User ID=sa;Password=123456789";

                SqlConnection con = new SqlConnection(constring);
                SqlDataAdapter ad = new SqlDataAdapter("Select * from " + tname, con);
                DataSet ds = new DataSet();
                ad.Fill(ds, tname);
                foreach (DataTable table in ds.Tables)
                {
                    foreach (DataRow row in table.Rows)
                    {
                        foreach (DataColumn column in table.Columns)
                        {
                            object item = row[column];
                            Console.Write(item + "\t");
                        }
                        Console.WriteLine("");
                    }
                }
            }
            catch(SqlException ex)
            {
                log.Error(ex.Message);
            }

            


        }

        /// <summary>
        /// This is a main method entry point of Program
        /// "M:ADODOTNET.Dataset.Main(system.string)"
        /// </summary>
        /// <param name="args"> it is string array</param>
        static void Main(string[] args)
        {
            log4net.Config.BasicConfigurator.Configure();
            new Dataset().Connecting();
            Console.ReadKey();
        }
    }
}