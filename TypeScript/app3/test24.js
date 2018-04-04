var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.test1 = function (msg) {
        console.log("test1");
    };
    return B;
}());
B;
b1 = new B();
b1.test1();
b1.test1("abc");
