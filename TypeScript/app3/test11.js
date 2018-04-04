var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.sum = function () {
        console.log(this.x + "," + this.y);
        return this.x + this.y;
    };
    return A;
}());
var a1 = new A();
a1.x = 10;
a1.y = 20;
var a2 = a1.x + a1.y;
a1.sum();
console.log("done : " + a2);
