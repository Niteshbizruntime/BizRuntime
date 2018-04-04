class A 
{
   test(i? : number, j? : string, k : boolean)      // if j is optional k should be optional
   {
       console.log("from test(number, string, boolean)");
   }
}
// compile time error 