var A = /** @class */ (function () {
    function A(x) {
        this.x = x;
    }
    A.prototype.set = function (x) {
        this.x = x;
    };
    A.prototype.get = function () {
        return this.x;
    };
    return A;
}());
var a1 = new A(90);
var a2 = a1.get();
console.log(a2);
a1.set(120);
var a3 = a1.get();
console.log(a3);
