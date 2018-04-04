class A
{
    x : number;
    constructor(x : number)
    {
       this.X = x;
    }

    set X(x : number)
    {
        this.X = x;
    }
    get X()
    {
        return this.X;
    }
}
let a1 = new A(10);
console.log(a1.X);
a1.X = 20;
console.log(a1.X);
console.log(a1.x);