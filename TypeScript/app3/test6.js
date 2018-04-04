var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function (n1, n2) {
        console.log("from test : " + n1 + ":" + n2);
        return (n1 + n2);
    };
    return A;
}());
var a1 = new A();
var a2 = a1.test(4, 5);
console.log("done : " + a2);
