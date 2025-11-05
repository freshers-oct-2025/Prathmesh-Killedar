// Octal Numbers
let num = 0o77;
console.log(num);

// e = 10^5
let value = 3.14e5;
console.log(value);

let num2 = 0.0000005;
console.log(num2);

let err = "Error occured";
let hasErr = Boolean(err);

if (err) {
  console.log(err);
}

let isLogedIn = 1;

let boolenIsLoggedIn = Boolean(isLogedIn);
console.log(boolenIsLoggedIn);

let lang = "JavaScript";
let langname = lang;
langname = "Java";

console.log(lang);
console.log(langname);

console.log(lang.length);
console.log(lang.toUpperCase());

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 15;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());

//months starts from 0
console.log(myDate.getMonth() + 1);
