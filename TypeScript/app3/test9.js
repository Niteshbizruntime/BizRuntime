var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log(x + "," + y);
    };
    return A;
}());
var a1 = new A();
a1.x = 10;
a1.y = 20;
var a2 = a1.x + a1.y;
a1.test();
console.log("done : " + a2);
