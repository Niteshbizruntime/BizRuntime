class A
{
    x : number;
    constructor(x : number)
    {
       this.x = x;
    }

    setX(x : number)
    {
        this.x = x;
    }
    getX()
    {
        return this.x;
    }
}
let a1 = new A(10);
console.log(a1.getX());
a1.setX(20);
console.log(a1.getX());
console.log(a1.x);