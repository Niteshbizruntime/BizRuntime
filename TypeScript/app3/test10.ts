class A 
{
    x : number;
    y : number;
    test()
    {
        console.log(this.x + "," + this.y);
    }
}
let a1 = new A();
a1.x = 10;
a1.y = 20;
let a2 = a1.x + a1.y;
a1.test();
console.log("done : " + a2);
