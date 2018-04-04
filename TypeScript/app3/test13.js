var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function (x) {
        console.log("from test(number)");
    };
    return A;
}());
var a1 = new A();
a1.test();
console.log("-------------------");
a1.test(10);
