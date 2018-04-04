let a1 = 'abc'; //1st way
let a2 = a1.length;
let a3;         //2nd way
a3 = 'abc hello';
let a4 = a3.substring(2, 3);

let a5 : string;    //3rd way
a5 = "hello to all";
let a6 = a5.length;

let a7 = (<string>a3).length;
let a8 = (a3 as string).length;
let a9 = a3.length;