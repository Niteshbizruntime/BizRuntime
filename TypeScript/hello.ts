 

 
// ---------- VARIABLES ----------
  
var myName: string = "Derek";
 
var myAge: number = 41;
 
var canVote: boolean = true;
 
var anything: any = "dog";
anything = 2;
 
console.log( "My Name is " + myName+"<br/>");
 
console.log("myName is a " + typeof(myName) + "<br />");
console.log("canVote is a " + typeof(canVote) + "<br />");
console.log("anything is a " + typeof(anything) + "<br />");
 
var strToNum: number = parseInt("5");
console.log("strToNum is a " + typeof(strToNum) + "<br />");
 
var numToStr: number = 5;
console.log("numToStr is a " + typeof(numToStr.toString()) + "<br />");
 
const PI = 3.14159;
 
// ---------- INTERFACES ----------
 
interface SuperHero {
  realName: String;
  superName: String;
}
 
var superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}
 
console.log(superman.realName + " is " + superman.superName + "<br />");
 
 
// ---------- ARRAYS ----------
 
var employees: string[] = ["Bob", "Sally", "Sam"];
 
console.log(employees.toString() + "<br />");
 
var superheroes: SuperHero[] = [];
 
superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
});
 
console.log(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
 
// ---------- MATH ----------
 
console.log("5 + 4 = " + (5+4) + "<br />");
console.log("5 - 4 = " + (5-4) + "<br />");
console.log("5 * 4 = " + 5*4 + "<br />");
console.log("5 / 4 = " + 5/4 + "<br />");
console.log("5 % 4 = " + 5%4 + "<br />");
 
console.log("5 + String 2 = ", (5+'2') + "<br />");
 
var randNum: number = 1;
 
console.log("randNum++ = " + randNum++ + "<br />");
console.log("++randNum = " + ++randNum + "<br />");
console.log("randNum-- = " + randNum-- + "<br />");
console.log("--randNum = " + --randNum + "<br />");
 
// ---------- CONDITIONALS ----------

let sampLet = 123;
if (true) {
    let sampLet = 456;
}
console.log("sampLet : " + sampLet + "<br />");
 
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
console.log("sampVar : " + sampVar + "<br />");
 
// ---------- LOOPING ----------
 
var randArray = [5,6,7,8];
 
for(var val in randArray){
  console.log(val + "<br />");
}
 
var strArray = randArray.map(String)
 
for(var val of strArray){
  console.log(val + "<br />");
}
 
// ---------- FUNCTIONS ----------
 
var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}
 
var theSum1: number = getSum(5,2);
 
console.log("5 + 2 = " + theSum1 + "<br />");
 
var getDiff = function(num1: number, num2 = 2, num3?: number): number{
 
  if (typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}
 
console.log("5 - 2 = " + getDiff(5) + "<br />");
console.log("5 - 2 - 3 = " + getDiff(5,2,3) + "<br />");
 
var sumAll = function(...nums: number[]): void{
 
  var sum = nums.reduce((a, b) => a + b, 0);
  console.log("Sum : " + sum + "<br />");
}
 
sumAll(1,2,3,4,5);
  
var addOne = (x)=>x+1;
 
console.log("1 + 1 = " + addOne(1) + "<br />");
 
// ---------- CLASSES ----------
  
class Animal {
 
  public favFood: string;
 
  static numOfAnimals: number = 0;
 
  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }
 
  ownerInfo() {
    console.log(this.name + " is owned by " + this.owner + "<br />");
  }
 
  static howManyAnimals(): number{
    return Animal.numOfAnimals;
  }
 

  private _weight: number;
 
  get weight(): number{
    return this._weight;
  }
 
  set weight(weight: number){
    this._weight = weight;
  }
 
}
 
var spot = new Animal("Spot", "Doug");
 
spot.ownerInfo();
 
spot.weight = 100
 
console.log("Spot's weight is " + spot.weight + "<br />");
 
console.log("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
class Dog extends Animal{
  constructor(name: string, owner: string){
    super(name, owner);
    Dog.numOfAnimals++;
  }
}
 
var grover = new Dog("Grover", "Jimmy");
 

console.log("# of Animals : " + Animal.howManyAnimals() + "<br />");
 

console.log("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
 

console.log("Does grover have a name : " + ('name' in grover) + "<br />");
 
// ---------- INTERFACES 2 ----------
 
interface Vehicle {
  drive(): any;
}
 
class Car implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    console.log("The car drives with " + this.wheels + " wheels<br />");
  }
}
 
class Bicycle implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    console.log("The bicycle drives with " + this.wheels + " wheels<br />");
  }
}
 
var car = new Car(4);
var bike = new Bicycle(2);
 
car.drive();
bike.drive();
 
// ---------- GENERIC FUNCTIONS ----------

 
function GetType<T>(val: T): string{
  return typeof(val);
}
 
var aStr = "A String";
var aNum = 10;
 
console.log(GetType(aStr) + "<br />");
console.log(GetType(aNum) + "<br />");
 

 
function GetWheels<w extends Vehicle>(veh: w): number
{
  return veh.drive();
}
 
GetWheels(car);
GetWheels(bike);
 

 
class GenericNumber<T>{
 
  add: (val1: T, val2: T) => T;
}
 
var aNumber = new GenericNumber<number>();
 
aNumber.add = function(x, y){return x + y;};
 
console.log("5 + 4 = " + aNumber.add(5, 4) + "<br />");
 
var aStrNum = new GenericNumber<string>();
 
aStrNum.add = function(x, y){return String(Number(x) + Number(y));};
 
console.log("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
 
// ---------- DESTRUCTORING ----------
 
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
 
console.log(x + y + z + "<br />");
 
[x, y, z] = [z, y, x];
console.log("Switch : " + x + y + z + "<br />");
 
// ---------- TEMPLATE STRINGS ----------

var multStr = `I go on for
many lines<br />`;
console.log(multStr);
 
console.log(`<b>${multStr}</b>`);
 
// ---------- SPREAD OPERATOR ----------
 
function theSum(x, y, z): void{
  console.log("Sum : " + (x + y + z) + "<br />");
}
 
var args = [4, 5, 6];
 
theSum(...args);
 
// ---------- ENUMS ----------
enum Emotion {
  Happy = 1,
  Sad,
  Angry
};
 
var myFeeling = Emotion.Happy;
  
myFeeling = 1;