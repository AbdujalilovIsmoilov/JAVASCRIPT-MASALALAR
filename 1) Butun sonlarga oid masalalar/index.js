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

// const A = Number(prompt("A kesmani kiriting"));
// const B = Number(prompt("B kesmani kiriting"));
// const positiveResult = A >= 1 && B >= 1 ? [A, B] : console.log("Manfiy son yoki Text");
// try {
//   var [a, b] = positiveResult;
// } catch (error) {
//   var err = error;
// }
// if (err) {
//   console.log("Error Manfiy son mavjud, 0 raqamini ham kiritish mumkin emas yoki text kiritmang");
// } else {
//   const result = Math.floor(a / b);
//   const z = a % b;
//   console.log(`${a} kesmada, ${b} kesmani ${result} marta joylashtirish mumkin. Joylashmagan qismi ${z} ta`);
// }


/*
Integer6. Ikki xonali son berilgan. Oldin uni o'nliklar xonasidagi raqamini,
so'ng birliklar xonasidagi raqamini chiqaruvchi programma tuzilsin.
*/

// const x = Number(prompt("A kesmani kiriting"));
// const y = Math.floor(x / 10);
// const z = x % 10;
// if (x == false) {
//   console.log("Promptni ichi bo'sh Prompt ga son yozing");
// } else if (x <= 9 || x >= 99) {
//   console.log("Faqat 2 xonali musbat son yozish kerak. 2 musbat xonali sondan oshiq yozish mumkin emas");
// } else if (x >= 9 && x <= 99) {
//   const y = Math.floor(x / 10);
//   const z = x % 10;
//   console.log(`Son: ${y}${z}. Birinchi son: ${y}. Ikkinchi son: ${z}.`);
// } else {
//   console.log("Son emas");
// }


/*
Integer7. Ikki xonali son berilgan. Uning raqamlari yig'indisini aniqlovchi
programma tuzilsin.
*/

// const number = Number(prompt("2 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number > 99) {
//   console.log(`Bu ${number} soni 2 xonalidan katta`);
// } else if (isNaN(number)) {
//   console.log("Son emas");
// } else {
//   const firstNumber = Math.floor(number / 10);
//   const secondNumber = number % 10;
//   console.log(firstNumber + secondNumber);
// }


/*
Integer8. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil
bo'lgan sonni aniqlovchi programma tuzilsin. 
*/


// const number = Number(prompt("2 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number > 99) {
//   console.log(`Bu ${number} soni 2 xonalidan katta. 2 xonali son yozing.`);
// } else if (isNaN(number)) {
//   console.log("Son emas");
// } else {
//   let firstNumber = Math.floor(number / 10);
//   let secondNumber = number % 10;
//   [firstNumber,secondNumber] = [secondNumber,firstNumber];
//   console.log(`Bu ${number} soni qiymati teskariga almashganda ${firstNumber}${secondNumber} soni chiqadi.`);
// }


/*
Integer9. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi 
programma tuzilsin. 
*/

// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   const x = number % 10;
//   console.log(`Bu ${number} sonini yuzlar xonasida 3-raqami raqami ${x} ga teng`);
// }


/*
Integer10. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamini 
so'ng o'nliklar xonasidagi raqamini chiqaruvchi programma tuzilsin.
*/


// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   const numberOne = Math.floor(number / 100);
//   const numberTwo = Math.floor((number % 100) / 10);
//   console.log(`Bu ${number} sonining birliklar xonasidagi raqami ${numberOne} ga teng. 
// O'nliklar xonasidagi raqami ${numberTwo} ga teng.`);
// }


/*
Integer11. Uch xonali son berilgan. Uning raqamlar yig'indisini aniqlovchi
programma tuzilsin.
*/

// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   const numberOne = Math.floor(number / 100);
//   const numberTwo = Math.floor((number % 100) / 10);
//   const numberThree = number % 10;
//   const numbersResult = numberOne + numberTwo + numberThree;
//   console.log(`Bu 3 xonali ${number} raqamlar yig'indisini javobi: ${numbersResult} ga teng.`);
// }


/*
Integer12. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan 
hosil bo'lgan sonni aniqlovchi programma tuzilsin.
*/

// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   let numberOne = Math.floor(number / 100);
//   let numberTwo = Math.floor((number % 100) / 10);
//   let numberThree = number % 10;
//   let numbersResult = [numberOne, numberTwo, numberThree] = [numberThree, numberTwo, numberOne];
//   console.log(`Bu 3 xonali ${number} raqamlarini teskari tartibda yozishdan hosil bo'lgan sonni javobi: ${numbersResult.join("")} ga teng.`);
// }


/*
Integer13. Uch xonali son berilgan. Uning chapdan birinchi raqamini o'chirib o'ng tarafiga
yozishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
*/


// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   let numberOne = Math.floor(number / 100);
//   let numberTwo = Math.floor((number % 100) / 10);
//   let numberThree = number % 10;
//   [numberThree] = [numberOne];
//   numberOne = "";
//   console.log(`
//   Bu ${number} sonining:
//   Birinchi raqam: ${numberOne}. hech qandey qiymat yo'q. 
//   Ikkinchi raqam: ${numberTwo}. ga teng.
//   Uchinchi raqam: ${numberThree}. ga teng.
//   `);
//   /* 
//   Bu misol da Uch xonali chap tomondagi birinchi raqami uch xonali o'ng tomondagi
//   birinchi son bilan almashtirilyaptida keyin esa uch xonali sonning chap tomondagi birinchi soni 
//   o'chirib yuborilyapti. Natija keyin Masalani shartidek chiqyapti. 
//   */
// }


/*
Integer14. Uch xonali son berilgan. Uning o'ngdan birinchi raqamini o'chirib 
chap tarafiga yozishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
*/

// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   let numberOne = Math.floor(number / 100);
//   let numberTwo = Math.floor((number % 100) / 10);
//   let numberThree = number % 10;
//   [numberOne] = [numberThree];
//   numberThree = "";
//   console.log(`
//   Bu ${number} sonining:
//   Birinchi raqam: ${numberOne}. hech qandey qiymat yo'q. 
//   Ikkinchi raqam: ${numberTwo}. ga teng.
//   Uchinchi raqam: ${numberThree}. ga teng.
//   `);
//   /* 
//   Bu misol da Uch xonali o'ng tomondagi birinchi raqami uch xonali chap tomondagi
//   birinchi son bilan almashtirilyaptida keyin esa uch xonali sonning o'ng tomondagi birinchi soni 
//   o'chirib yuborilyapti. Natija keyin Masalani shartidek chiqyapti. 
//   */
// }


/*
Integer15. Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan yuzliklar 
xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
(Kirish=123; Natija: 213)
*/


// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   let numberOne = Math.floor(number / 100);
//   let numberTwo = Math.floor((number % 100) / 10);
//   const numberThree = number % 10;
//   [numberOne, numberTwo] = [numberTwo, numberOne];
//   console.log(`Kirish: ${number} Natija: ${numberOne}${numberTwo}${numberThree} ga teng.`);
// }


/*
Integer16. Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan birliklar 
xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
(Kirish=123; Natija: 132)
*/


// const number = Number(prompt("3 xonali sonni yozing", ""));
// if (number == false) {
//   console.log("Promptni ichi bo'sh");
// } else if (number <= 99) {
//   console.log(`${number} soni 3 xonali sondan kichkina.`);
// } else if (number >= 1000) {
//   console.log(`${number} soni 3 xonali sondan katta`);
// } else if (isNaN(number)) {
//   console.log(`Bu son emas. Matn ishlatmang. `);
// } else {
//   let numberOne = Math.floor(number / 100);
//   let numberTwo = Math.floor((number % 100) / 10);
//   let numberThree = number % 10;
//   [numberTwo, numberThree] = [numberThree, numberTwo];
//   console.log(`Kirish: ${number} Natija: ${numberOne}${numberTwo}${numberThree} ga teng.`);
// }


/*
Integer17. 999 dan katta bo'lgan son berilgan. Bir marta bo'lib butunni va bo'lib 
qoldiqni olish operatsiyasidan foydalanib berilgan sonni yuzliklar xonasidagi 
sonni aniqlovchi programma tuzilsin.  
*/


