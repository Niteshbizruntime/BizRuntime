// ---------- VARIABLES ----------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName = "Derek";
var myAge = 41;
var canVote = true;
var anything = "dog";
anything = 2;
console.log("My Name is " + myName + "<br/>");
console.log("myName is a " + typeof (myName) + "<br />");
console.log("canVote is a " + typeof (canVote) + "<br />");
console.log("anything is a " + typeof (anything) + "<br />");
var strToNum = parseInt("5");
console.log("strToNum is a " + typeof (strToNum) + "<br />");
var numToStr = 5;
console.log("numToStr is a " + typeof (numToStr.toString()) + "<br />");
var PI = 3.14159;
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
console.log(superman.realName + " is " + superman.superName + "<br />");
// ---------- ARRAYS ----------
var employees = ["Bob", "Sally", "Sam"];
console.log(employees.toString() + "<br />");
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
console.log(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
// ---------- MATH ----------
console.log("5 + 4 = " + (5 + 4) + "<br />");
console.log("5 - 4 = " + (5 - 4) + "<br />");
console.log("5 * 4 = " + 5 * 4 + "<br />");
console.log("5 / 4 = " + 5 / 4 + "<br />");
console.log("5 % 4 = " + 5 % 4 + "<br />");
console.log("5 + String 2 = ", (5 + '2') + "<br />");
var randNum = 1;
console.log("randNum++ = " + randNum++ + "<br />");
console.log("++randNum = " + ++randNum + "<br />");
console.log("randNum-- = " + randNum-- + "<br />");
console.log("--randNum = " + --randNum + "<br />");
// ---------- CONDITIONALS ----------
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
console.log("sampLet : " + sampLet + "<br />");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
console.log("sampVar : " + sampVar + "<br />");
// ---------- LOOPING ----------
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    console.log(val + "<br />");
}
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    console.log(val + "<br />");
}
// ---------- FUNCTIONS ----------
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
console.log("5 + 2 = " + theSum1 + "<br />");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
console.log("5 - 2 = " + getDiff(5) + "<br />");
console.log("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    console.log("Sum : " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
var addOne = function (x) { return x + 1; };
console.log("1 + 1 = " + addOne(1) + "<br />");
// ---------- CLASSES ----------
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        console.log(this.name + " is owned by " + this.owner + "<br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
console.log("Spot's weight is " + spot.weight + "<br />");
console.log("# of Animals : " + Animal.howManyAnimals() + "<br />");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
console.log("# of Animals : " + Animal.howManyAnimals() + "<br />");
console.log("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
console.log("Does grover have a name : " + ('name' in grover) + "<br />");
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        console.log("The car drives with " + this.wheels + " wheels<br />");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        console.log("The bicycle drives with " + this.wheels + " wheels<br />");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
// ---------- GENERIC FUNCTIONS ----------
function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
console.log(GetType(aStr) + "<br />");
console.log(GetType(aNum) + "<br />");
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
console.log("5 + 4 = " + aNumber.add(5, 4) + "<br />");
var aStrNum = new GenericNumber();
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
console.log("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
// ---------- DESTRUCTORING ----------
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
console.log(x + y + z + "<br />");
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
console.log("Switch : " + x + y + z + "<br />");
// ---------- TEMPLATE STRINGS ----------
var multStr = "I go on for\nmany lines<br />";
console.log(multStr);
console.log("<b>" + multStr + "</b>");
// ---------- SPREAD OPERATOR ----------
function theSum(x, y, z) {
    console.log("Sum : " + (x + y + z) + "<br />");
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
// ---------- ENUMS ----------
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
;
var myFeeling = Emotion.Happy;
myFeeling = 1;
var _a;
