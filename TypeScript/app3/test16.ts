class A 
{
   test(i? : number, j? : string, k? : boolean)
   {
       console.log("from test(number, string, boolean)");
   }
}
let a1 = new A();
a1.test();
console.log("-------------------");
a1.test(1000);
console.log("-------------------");
a1.test(10, "abc");
console.log("-------------------");
a1.test(10, "abc", true);