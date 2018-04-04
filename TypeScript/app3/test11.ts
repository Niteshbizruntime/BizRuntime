class A 
{
    x : number;
    y : number;
    sum() : number
    {
        console.log(this.x + "," + this.y);
        return this.x + this.y;
    }
}
let a1 = new A();
a1.x = 10;
a1.y = 20;
let a2 = a1.sum();
console.log("done : " + a2);
