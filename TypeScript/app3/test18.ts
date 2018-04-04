class A 
{
   test(i? : number, j? : string, k? : boolean) 
   {
       console.log("from test(number, string, boolean)");
   }
}
let a1 = new A();
a1.test(100);
a1.test(100, "abc");
a1.test(100, "hello", true);
//a1.test(100, true);