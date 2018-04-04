var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function (msg) {
        console.log("from test : " + msg);
        return 20;
    };
    return A;
}());
var a1 = new A();
var a2 = a1.test("hello");
console.log("done : " + a2);
