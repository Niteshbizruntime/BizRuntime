class A 
{
   test()
   {
       console.log("from test()");
   }

   test(i : number)
   {
       console.log("from test(number)");
   }

   test(i : number, j : string)
   {
       console.log("from test(number, string)");
   }
}
//compile time error
