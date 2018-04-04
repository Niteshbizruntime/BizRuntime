interface A
{
    test1();
}
class B implements A
{
    test1()
    {
        console.log("test1");
    }
}
let b1 = new B();
b1.test1();