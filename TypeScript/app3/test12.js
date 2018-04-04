var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.test = function () {
        console.log("from test()");
    };
    A.prototype.test = function (x) {
        console.log("from test(number)");
    };
    return A;
}());
/*
sompile time error
*/ 
