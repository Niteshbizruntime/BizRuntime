var A = /** @class */ (function () {
    function A(_x) {
        this._x = _x;
    }
    Object.defineProperty(A.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    return A;
}());
var a1 = new A(10);
console.log(a1.x);
a1.x = 20;
console.log(a1.x);
console.log(a1.x);
