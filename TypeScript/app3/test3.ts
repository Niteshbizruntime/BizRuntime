class A 
{
    test() : number       
    {
        console.log("from test");
        return 10;
    }    
}
let a1 = new A();
let a2 = a1.test();
console.log("done : " + a2);