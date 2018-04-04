class A 
{
    test(msg : string) : number       
    {
        console.log("from test : " + msg);
        return msg.length;
    }    
}
let a1 = new A();
let a2 = a1.test("hello");
console.log("done : " + a2);