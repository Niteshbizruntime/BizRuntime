class A
{
    x : number;
    constructor(x : number)
    {
        this.x = x;
    }
    set(x : number)
    {
        this.x = x;
    }
    get() : number
    {
        return this.x;
    }
}
let a1 = new A(90);
let a2 = a1.get();
console.log(a2);
a1.set(120);
let a3 = a1.get();
console.log(a3);