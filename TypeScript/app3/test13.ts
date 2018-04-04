class A 
{
   test(x? : number)
   {
       console.log("from test(number)");
   }
}

let a1 = new A();
a1.test();
console.log("-------------------");
a1.test(10);