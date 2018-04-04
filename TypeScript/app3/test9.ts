class A 
{
    x : number;
    y : number;
    test()
    {
        console.log(x + "," + y);       // we can not use property straight away
    }
}
let a1 = new A();
a1.x = 10;
a1.y = 20;
let a2 = a1.x + a1.y;
a1.test();
console.log("done : " + a2);
/*
test9.ts(7,21): error TS2663: Cannot find name 'x'. Did you mean the instance member 'this.x'?
test9.ts(7,31): error TS2663: Cannot find name 'y'. Did you mean the instance member 'this.y'?
*/
