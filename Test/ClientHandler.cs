using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace Server
{
    class ClientHandler
    {
       

        private string name;
        Socket s;
        bool isloggedin;
        string[] strr;
        string a;
        static ClientHandler kk;
        Dictionary<string, ClientHandler> dSockets;


        public ClientHandler(Socket s, string name, string con, Dictionary<string, ClientHandler> ch)
        {

            this.name = name;
            this.s = s;
            this.isloggedin = true;
            dSockets = ch;
            //this.strr = con.Split('|');
            this.a = con;
        }

        public void Run()
        {
            string received;
            while (true)
            {
                try
                {
                    byte[] Buffer = new byte[255];
                    int rec = s.Receive(Buffer, 0, Buffer.Length, 0);
                    Array.Resize(ref Buffer, rec);
                    received = Encoding.Default.GetString(Buffer);

                    Console.WriteLine(received);
                    string[] st = received.Split('#');
                    string recipient = st[0];
                    string MsgToSend = st[1];

                    if (MsgToSend.Equals("logout"))
                    {
                        dSockets.Remove(recipient);
                        this.isloggedin = false;
                        this.s.Close();
                        break;
                    }

                  

                    if ((a.ToUpper()).Equals("ALL"))
                    { foreach (KeyValuePair<string, ClientHandler> val in dSockets)
                        {
                            ClientHandler mc = (ClientHandler)val.Value;


                            if (mc.isloggedin == true)
                            {
                                byte[] sData = Encoding.Default.GetBytes(this.name + " : " + MsgToSend);
                                mc.s.Send(sData, 0, sData.Length, 0);
                            }

                        }
                    }
                    else if ((a.ToUpper()).Equals("NONE")) { }
                    else if ((a.ToUpper()).Equals("SELF")) {

                        foreach (KeyValuePair<string, ClientHandler> val in dSockets)
                        {
                            ClientHandler mc = (ClientHandler)val.Value;


                            if ((mc.name.Equals(recipient)) && mc.isloggedin == true)
                            {
                                byte[] sData = Encoding.Default.GetBytes(this.name + " : " + MsgToSend);
                                mc.s.Send(sData, 0, sData.Length, 0);
                            }

                        }

                    }
                    else if ((a.ToUpper()).Equals("EXCEPTME"))
                    {

                        foreach (KeyValuePair<string, ClientHandler> val in dSockets)
                        {
                            ClientHandler mc = (ClientHandler)val.Value;


                            if (!(mc.name.Equals(recipient)) && mc.isloggedin == true)
                            {
                                byte[] sData = Encoding.Default.GetBytes(this.name + " : " + MsgToSend);
                                mc.s.Send(sData, 0, sData.Length, 0);
                            }

                        }
                    }


                }
                catch (Exception e)
                {

                   Console.WriteLine(e.Message);
                }
            }
        }

        public void Send()
        {
            if (s != null)
            {
                while (true)
                {
                    string msg = Console.ReadLine();
                    foreach (KeyValuePair<string, ClientHandler> val in dSockets)
                    {
                        ClientHandler mc = (ClientHandler)val.Value;
                        byte[] sData = Encoding.Default.GetBytes("Server : " + msg);
                        mc.s.Send(sData, 0, sData.Length, 0);
                    }


                }
            }
        }
    }
}
