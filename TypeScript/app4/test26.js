var A = /** @class */ (function () {
    function A(x) {
        this.x = x;
    }
    A.prototype.setX = function (x) {
        this.x = x;
    };
    A.prototype.getX = function () {
        return this.x;
    };
    return A;
}());
var a1 = new A(10);
console.log(a1.getX());
a1.setX(20);
console.log(a1.getX());
