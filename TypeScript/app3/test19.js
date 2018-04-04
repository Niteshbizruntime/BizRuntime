var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function (i, j, k) {
        console.log("from test(number, string, boolean)");
    };
    return A;
}());
var a1 = new A();
a1.test(100, "test");
a1.test(100, "abc");
a1.test(100, "hello", true);
//a1.test(100, true);
