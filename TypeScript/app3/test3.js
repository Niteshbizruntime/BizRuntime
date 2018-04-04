var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log("from test");
        return 10;
    };
    return A;
}());
var a1 = new A();
var a2 = a1.test();
console.log("done : " + a2);
