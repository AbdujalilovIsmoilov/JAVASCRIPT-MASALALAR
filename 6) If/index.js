"use strict";

/* if #1. Butun son berilgan. Agar, berilgan son musbat bo'lsa,
1 ga oshirilsin, aks holda o'zgartirilmasin. Hosil bo'lgan 
sonni ekranga chiqaruvchi programma tuzilsin. 
*/

// const i = Number(prompt("Sonni yozing"));
// if(i == 0){
// console.log("0 soni musbat ham manfiy ham emas");
// }else if(i > 0){
//   console.log(i + 1);
// }else {
//   console.log(i);
// }

/* if #2. Butun son berilgan. Agar berilgan son musbat bo'lsa, 1 ga oshiring,
aks holda 2 ga kamaytiring. Hosil bo'lgan sonni ekranga chiqaruvchi 
programma tuzilsin.
*/

// const i = Number(prompt("Sonni yozing"));
// if(i == 0){
//   console.log("0 soni musbat ham manfiy ham emas");
// }else if(i > 0){
//   console.log(i + 1);
// }else {
//   console.log(i - 2);
// }

/* if #3. Butun son berilgan. Agar berilgan son musbat bo'lsa, 1 ga oshiring,
agar manfiy bo'lsa 2 ga kamaytiring. Agar 0 ga teng bo'lsa, 10 ni o'zlashtirsin.
Hosil bo'lgan sonni ekranga chiqaruvchi programma tuzilsin.
*/

// const i = Number(prompt("Sonni yozing"));
// if(i == 0){
//   console.log(10);
// }else if(i > 0){
//   console.log(i + 1);
// }else {
//   console.log(i - 2);
// }

/* if #4. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son
borligini aniqlovchi programma tuzilsin.
*/

// const i = Number(prompt("1-sonni yozing"));
// const j = Number(prompt("2-sonni yozing"));
// const z = Number(prompt("3-sonni yozing"));

// let x = 0;
// if (i > 0) {
//   x++;
// }
// if (j > 0) {
//   x++;
// }
// if (z > 0) {
//   x++;
// }

// console.log(`${x} ta musbat son bor`);

/* if #5. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat
va manfiy son borligini aniqlovchi programma tuzilsin.
*/

// const i = Number(prompt("1-sonni yozing"));
// const j = Number(prompt("2-sonni yozing"));
// const z = Number(prompt("3-sonni yozing"));

// let x = 0;
// let g = 0;

// if (i == 0 || j == 0 || z == 0) {
//   console.log("0 soni musbat ham manfiy ham emas");
// }
// if (i > 0) {
//   x++;
// }
// if (j > 0) {
//   x++;
// }
// if (z > 0) {
//   x++;
// }
// if (i < 0) {
//   g++;
// }
// if (j < 0) {
//   g++;
// }
// if (z < 0) {
//   g++;
// }

// console.log(`${x} ta musbat son bor`);
// console.log(`${g} ta manfiy son bor`);

/* if #6. Ikkita butun son berilgan. Shu sonlarning 
kattasini aniqlovchi programma tuzilsin. 
*/

// const i = Number(prompt("1-sonni yozing"));
// const j = Number(prompt("2-sonni yozing"));

// if(i == j){
//   console.log("Ikkalasi bir biriga teng");
// }else if(i > j){
//   console.log(i);
// }else if(i < j){
//   console.log(j);
// }else {
//   console.log("Son emas");
// }

/* if #7. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini 
aniqlovchi programma tuzilsin. 
*/

// const i = Number(prompt("1-sonni yozing"));
// const j = Number(prompt("2-sonni yozing"));

// if(i == j){
//   console.log("Ikkala son ham bir-biriga teng");
// }else if(i < j){
//   console.log(i);
// }else if(j < i){
//   console.log(j);
// }else {
//   console.log("Son emas");
// }

/* if #8. Ikkita butun son berilgan. Shu sonlarning avval kattasini 
keyin kichigini ekranga chiqaruvchi programma tuzilsin.
*/

// const i = Number(prompt("1-sonni yozing"));
// const j = Number(prompt("2-sonni yozing"));

// if(i > j && j < i){
//   console.log(`Katta son: ${i} soni
// Kichik son: ${j} soni`);
// }else{
//   console.log(`Katta son: ${j} soni
// Kichik son: ${i} soni`);
// }

/* if #9. A va B sonlari berilgan. Shu sonlarni shunday o'zgartirish kerakki,
A son kichik B son katta bo'lsin. A va B ning qiymatini ekranga chiqarilsin.
*/

// let a = Number(prompt("1-sonni yozing"));
// let b = Number(prompt("2-sonni yozing"));

// if(a > b){
//   [a,b] = [b,a];
//   console.log(`A: ${a} soni kichik. B: ${b} soni katta`);
// }else{
//   [a,b] = [b,a];
//   console.log(`A: ${b} soni kichik. B: ${a} soni katta`);
// }


/* if #10. A va B sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa,
A va B o'zgaruvchilari ularning yig'indisini o'zlashtirsin. Agar teng bo'lsa, 
0 ni o'zlashtirsin. A va B ning qiymati ekranga chiqarilsin.
 */

// const a = Number(prompt("1-sonni yozing"));
// const b = Number(prompt("2-sonni yozing"));

// if(a != b){
//   console.log(`a va b sonining yig'indisi: ${a + b} ga teng`);
// }else {
//   console.log(`a: ${a}. b: ${b}. Natija: ${0}`);
// }


/* if #11. A va B sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa,
A va B bu sonlarning kattasini o'zlashtirsin. Agar teng bo'lsa, 0 ni o'zlashtirsin.
A va B ning qiymati ekranga chiqarilsin. 
 */

// const a = Number(prompt("1-sonni yozing"));
// const b = Number(prompt("2-sonni yozing"));

// if(a != b){
//   console.log(a > b || b < a ? `Katta son: ${a}` : `Katta son: ${b}`);
// }else {
//   console.log(`a: ${a}. b: ${b}. Ikkala son bir-biriga teng.  Natija: ${0}`);
// }


/* if #12. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.
 */

// const a = Number(prompt("1-sonni yozing"));
// const b = Number(prompt("2-sonni yozing"));
// const c = Number(prompt("3-sonni yozing"));

// if(a < b && a < c){
//   console.log(`Kichik son a: ${a}`);
// }else if(b < a && b < c){
//   console.log(`Kichik son b: ${b}`);
// }else {
//   console.log(`Kichik son c: ${c}`);
// }


/* if #13. Uchta son berilgan. Shu sonlarni o'rtachasi (ya'ni katta va kichik sonlar
orasidagi son) ni aniqlovchi programma tuzilsin.
 */



/* if #14. 
 */

// Azimjon Pulatov