"use strict";

// Butun sonlarga oid masalalar

/*
Integer1. Uzunlik L santimetrda berilgan. Undagi to'liq metrlar sonini aniqlovchi
programma tuzilsin. (1m=100cm).
*/

// const L = Number(prompt("SM ni kiriting"));
// const result = L / 100;
// console.log(`${L} sm: ${result} metr`);


/*
Integer2. Og'irlik M kilogramda berilgan. Undagi to'liq tonnalar sonini aniqlovchi 
programma tuzilsin. (1t=1000kg).
*/

// const M = Number(prompt("Kg ni kiriting"));
// const result = M / 1000;
// console.log(`${M} Kg: ${result} tonna`);


/*
Integer3. Faylning hajmi baytlarda berilgan. Bo'lib butun olish operatsiyasidan foydalanib 
fayl hajmini to'liq kilobaytlarda ifodalovchi programma tuzilsin. (1Kb=1024bayt).
*/


// const Bayt = Number(prompt("Bayt ni kiriting"));
// const result = Bayt / 1024;
// console.log(`${Bayt} Bayt: ${result} KB`);


/*
Integer4. A va B (A > B) musbat sonlari berilgan. A kesmada, B kesmani 
necha marta joylashtirish mumkinligini aniqlovchi programma tuzilsin.
*/

// let A = Number(prompt("A kesmani kiriting"));
// let B = Number(prompt("B kesmani kiriting"));
// let positiveResult = A >= 1 && B >= 1 ? [A, B] : console.log("Manfiy son yoki Text");
// try {
//   var [a, b] = positiveResult;
// } catch (error) {
//   var err = error;
// }
// if (err) {
//   console.log("Error Manfiy son mavjud, 0 raqamini ham kiritish mumkin emas yoki text kiritmang");
// } else {
//   let result = Math.floor(a / b);
//   console.log(`${a} kesmada, ${b} kesmani ${result} marta joylashtirish mumkin. `);
// }


/*
Integer5. A va B (A > B) musbat sonlari berilgan. A kesmada, B kesmani 
necha marta joylashtirish mumkin. A kesmada B kesmaning joylashmagan qismini 
aniqlovchi programma tuzilsin.
*/

// let A = Number(prompt("A kesmani kiriting"));
// let B = Number(prompt("B kesmani kiriting"));
// let positiveResult = A >= 1 && B >= 1 ? [A, B] : console.log("Manfiy son yoki Text");
// try {
//   var [a, b] = positiveResult;
// } catch (error) {
//   var err = error;
// }
// if (err) {
//   console.log("Error Manfiy son mavjud, 0 raqamini ham kiritish mumkin emas yoki text kiritmang");
// } else {
//   let result = Math.floor(a / b);
//   let z = a % b;
//   console.log(`${a} kesmada, ${b} kesmani ${result} marta joylashtirish mumkin. Joylashmagan qismi ${z} ta`);
// }


/*
Integer6. Ikki xonali son berilgan. Oldin uni o'nliklar xonasidagi raqamini,
so'ng birliklar xonasidagi raqamini chiqaruvchi programma tuzilsin.
*/

// let x = +prompt("A kesmani kiriting");
// let y = Math.floor(x / 10);
// let z = x % 10;
// if (x == false) {
//   console.log("Promptni ichi bo'sh Prompt ga son yozing");
// } else if (x <= 9 || x >= 99) {
//   console.log("Faqat 2 xonali musbat son yozish kerak. 2 musbat xonali sondan oshiq yozish mumkin emas");
// } else if (x >= 9 && x <= 99) {
//   let y = Math.floor(x / 10);
//   let z = x % 10;
//   console.log(`Son: ${y}${z}. Birinchi son: ${y}. Ikkinchi son: ${z}.`);
// } else {
//   console.log("Son emas");
// }