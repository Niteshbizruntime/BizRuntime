interface A
{
    test1();
}
class B implements A
{
    test1(msg)
    {
        console.log("test1");
    }
}
//compile time error