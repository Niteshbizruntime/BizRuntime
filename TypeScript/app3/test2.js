var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log("from test");
    };
    return A;
}());
var a1 = new A();
a1.test();
console.log("done");
