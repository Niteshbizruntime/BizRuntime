class A
{
    _x : number;
    constructor(x : number)
    {
       this._x = x;
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
a1.x = 11;
console.log(a1.x);
console.log(a1.x);