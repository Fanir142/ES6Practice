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

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(4)}`;

console.log(total);


