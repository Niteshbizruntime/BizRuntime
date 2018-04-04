var A = /** @class */ (function () {
    function A(x) {
        this.X = x;
    }
    Object.defineProperty(A.prototype, "X", {
        get: function () {
            return this.X;
        },
        set: function (x) {
            this.X = x;
        },
        enumerable: true,
        configurable: true
    });
    return A;
}());
var a1 = new A(10);
console.log(a1.X);
a1.X = 20;
console.log(a1.X);
console.log(a1.x);
