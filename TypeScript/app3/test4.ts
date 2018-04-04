class A 
{
    test(msg) : number       
    {
        console.log("from test : " + msg);
        return 20;
    }    
}
let a1 = new A();
let a2 = a1.test("hello");
console.log("done : " + a2);