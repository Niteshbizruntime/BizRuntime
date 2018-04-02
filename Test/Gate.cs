﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Join
{
    class Gate
    {
        static void Call()
        {
            Console.WriteLine("Open Door");
            Boolean[] doors = new Boolean[100];

            for (int i = 0; i < 100; i++)
            {
                doors[i] = false;
            }
            int increment = 1;
            for (int i = 0; i < 100; i++)
            {
                for (int j = increment - 1; j < 100; j = j + increment)
                {
                    doors[j] = !doors[j];
                }
                increment++;
            }
            for (int i = 0; i < 100; i++)
            {
                if (doors[i])
                {
                    Console.WriteLine(i + 1 + " ");
                }
            }
        }
       
            static  void Main(string[] args)
            {
               Call();
                Console.ReadKey();
            }
        }
    
}