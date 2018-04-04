class A
{
    constructor(public _x : number)
    {
    
    }

    set x(x : number)
    {
        this._x = x;
    }
    get x()
    {
        return this._x;
    }
}
let a1 = new A(10);
console.log(a1.x);
a1.x = 20;
console.log(a1.x);
console.log(a1.x);