/*console.log('Hello TUC');
console.log(5 + 6);*/

/*let text1 = "70";
let text2 = "5";

let result = text1 < text2 ? 'T' : 'F';

console.log(result);*/


/*let x = 4;
let y = 2;
let z = Math.pow(x, y);

console.log(z);

z *= 3;

console.log(z);

z++;

console.log(z);

z **= 2;
console.log(z);*/

/*let x = BigInt('123456789012345678901234567890') + BigInt(1);

console.log(x);*/


//function 
/*var salary = 30;

function addition(x) {
    let z = salary * 0.1;
    return z;
    //console.log(z);
}

let bonus = addition(salary);

let totalSalary = salary + bonus;


//object
console.log(totalSalary);*/
//const car = {type:"Fiat", model:"500", color:"white"};
//object--> name:value


/*/const car = {
    type: "Fiat",
    model: "500",
    color: "White"
};

console.log(car.type);
console.log(car["color"]);

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

};

console.log(person.fullName());*/

//string length

/*let s = "M\"d Fanir \nAl \\Mamun";
let len = s.length;

console.log(s);

let text =
    `The quick
brown fox
jumps over
the lazy                                                  dog`;

console.log(text);*/

/*let x = "John";
let y = new String("Jon");

console.log(typeof (y));

let z = x === y;
console.log(z);*/



/*let text = "ABCDEFGHIJKLM    NOPQRSTUVWXYZ";
let length = text.length;

console.log(length);*/

//charAt,at(ES6)--> index of char
//charCodeAt --> char value / ascii value of char
//when use - value then it travers at the end of the string

/*let text = "HELLA WORLD";
let char = text.at(-2);
//let char = text[4];

console.log(char);*/

/*let text = "Apple, Banana, Kiwi";
let part = text.substr(7, 6);

console.log(part);*/

/*let text1 = "Hello World!";
let text2 = text1.toLowerCase();

console.log(text2);*/


/*let text1 = "     Hello";
let text2 = "World       ";
let text3 = text1.concat(" the fucking ", text2);

console.log(text3.trimEnd()); //trim() removes the white space from both side of the string , trimStrat()- first side of string white space, trimEnd - end side white space*/

/*let text = "5";
let padded = text.padEnd(4, "A");

console.log(padded);*/

/*let text = "Hello world!";
let result = text.repeat(4);

console.log(result);*/

//let text = "Please Microsoft visit Microsoft!";
//let newText = text.replace("Microsoft", "W3Schools"); //replace() method works only the first match

//let text = "Please visit Microsoft!";
//let newText = text.replace(/MICROSOFT/i, "W3Schools"); //regular expression i is case insensitive

/*let text = "Please, visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools"); // g for all matches

console.log(text.split(""));

console.log(newText);*/

/*let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");
console.log(Array.from(iterator));*/

/*let text = "Hello world, welcome to the universe.";
console.log(text.includes("world"));*/

/*let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`; //string interpolation

console.log(text);*/

//Expression Substitution

/*let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(4)}`;

console.log(total);*/

/*/let x = (0.2 * 10 + 0.1 * 10) / 10;

let y = 9999999999999999;  // y will be 10000000000000000

console.log(`${x.toFixed(4)}`, y);*/

/*/let x = "100";
let y = "10";
let z = x / y;

console.log(z);*/

/*let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    console.log(myNumber);
}
console.log(myNumber);*/


//let x = 15;
//console.log(x.toString(16)); //base conversion

/*let x = 9999999999999999;
let y = BigInt("9999999999999999");
console.log(x, y);*/

/*let x = 90071992547409954587n;
let y = 1;
let z = Number(x) / y;

console.log(z);*/

/*let x = Number.EPSILON;
console.log(x);*/

//const cars = ["Saab", "Volvo", "BMW"];

//const cars = [];
//cars[0] = "Saab";
//cars[1] = "Volvo";
//cars[2] = "BMW";
/*const cars = new Array("Saab", "Volvo", "BMW");
cars[0] = "Audi";
console.log(cars);*/
/*const myArray = [];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
myArray[0] = Date.now;
myArray[1] = 20;
myArray[2] = fruits;
console.log(myArray);

console.log(myArray[2][1]);

console.log(myArray.length);
console.log(myArray.sort());
console.log(myArray[myArray.length - 1]);*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Grapes");

console.log(fruits.shift());


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits.join("-"));
}

//fruits.forEach((i) => console.log(i));*/

/*const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);*/


/*const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const arr4 = ["Cecilie", "Lone", "Bruder"];
const myChildren = arr1.concat(arr2, arr3, arr4);

console.log(myChildren);*/


/*/const fruits = ["Banana", "Orange", "Apple", "Mango", "Emil", "Tobias", "Linus"];
const a = fruits.copyWithin(2,0, 2);

console.log(a);*/

/*const myArr = [[1, 2], [3, 4, [55, 66]], [5, 6]];
const newArr = myArr.flat();

console.log(newArr.flat());


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

console.log(fruits);*/

/*const numbers = [4, 9, 16,22, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 2;
}

console.log(first);*/


/*const arr = [5, 6, 8, 6, 2, 0, 15];

console.log(Math.max.apply(0, arr));

const c = arr.sort(function (a, b) { return b - a });

console.log(c);*/

/*let a = Math.trunc(4.9);
let b = Math.trunc(4.7);
let c = Math.trunc(4.4);
let d = Math.trunc(4.2);
let e = Math.trunc(-4.2);

console.log(Math.random()*5);*/

var number = 0;

/*if (number > 0 && number % 2 == 0) {
    console.log("The number is even");
}
else if (number == 0) {
    console.log("The number is 0");
}
else {
    console.log("The number is odd");
}*/
/*var choice = "Hello";
switch (choice) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Today is Ramadan";
        break;
}

console.log(day);*/












































































