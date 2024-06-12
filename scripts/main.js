let a = 1 + '1'; //Динамічна типізація/Автоматичне перетворення
console.log(a);

//Alternative
let b = 2; // number
let c = '2'; //string 
let d = b + c; // Проблема динамічної типізації в JavaScript

let name = 'Eugene';
let str = `Hello ${a} ${b}`;

console.log(str);

let e = 4;
let f = '2';
let g = Math.pow(e, f);

console.log(g, typeof g);

let h = '9876543';
//let i = h.trim();
//let i = parseInt(h); // не строге перетворення
let i = Number (h.trim() ); // Строге

console.log(i, typeof i);


