class A 
{
    test(n1 : number, n2 : number) : number       
    {
        console.log("from test : " + n1 + ":" + n2);
        return (n1 + n2);
    }    
}
let a1 = new A();
let a2 = a1.test(4, 5);
console.log("done : " + a2);