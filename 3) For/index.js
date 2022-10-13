"use strict";

/*
1) K va n butun sonlari berilgan (n < 0).
k sonini n marta chiqaruvchi programma tuzilsin.
*/

// let k = 1;
// let n = 10;
// for(let i = 0; i <= n; i++){
//   console.log(`n: ${n}; k: ${k}`);
// }

/* 
2) a va b butun sonlari berilgan (a < b).
a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham)
chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin.
(a va b ham chiqarilsin).
*/

// let a = 1;
// let b = 10;
// for(let i = a; i <= b; i++){
//   console.log(i);
// }

/* 
3) a va b butun sonlari berilgan (a < b). 
a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari)
kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi
programma tuzilsin.
*/

// let j = 1;
// let x = 0;
// let k = 10;

// for(let i = k-1; i > j; i--){
//   x++;
//   console.log(`i: ${i}; x: ${x};`);
// }


/* 
4) Bir kg konfetning narxi berilgan (haqiqiy son).
1, 2, ..., 10 kg konfetni narxini chiqaruvchi 
programma tuzilsin.
*/

// let x = 1000;
// for(let i = 1; i <= 10; i++){
//   console.log(`${i} kg konfet narxi: ${i * x} so'm`);
// }


/* 
5) Bir kg konfetning narxi berilgan (haqiqiy son).
0.1, 0.2, ..., 0.9, 1kg konfetning narxini chiqaruvchi 
programma tuzilsin.
*/
// let x = 1000;
// for(let i = 0; i <= 1; i+=0.1){
//   console.log(`${Math.round(i * 10) / 10} kg konfetning narxi: ${Math.round(i * 10) / 10 * x} so'm`);
// }


/* 
6) Bir kg konfetning narxi berilgan (haqiqiy son).
1.2, 1.4, ..., 2kg konfetni narxini chiqaruvchi 
programma tuzilsin.
*/

// let sum = 1000;
// for(let i = 1 - 0.8; i <= 2; i+=0.2){
//   console.log(`${Math.round(i * 10) / 10} kg konfetning narxi: ${(Math.round(i * 10) / 10) * sum} so'm`);
// }


/* 
7) a va b butun sonlari berilgan (a < b).
a dan b gacha bo'lgan barcha butun sonlar yig'indisini 
chiqaruvchi programma tuzing.
*/

// let a = 1;
// let b = 10;
// let x = 0;

// for(let i = a; i <= b; i++){
//   x += i;
//   console.log(x);
// }


/* 
8) a va b butun sonlari berilgan (a < b).
a dan b gacha bo'lgan barcha butun sonlar kopaytmasini 
chiqaruvchi programma tuzing.
*/

// let a = 1;
// let b = 10;
// let x = 1;

// for(let i = a; i <= b; i++){
//   x *= i;
//   console.log(x);
// }


/* 
9) a va b butun sonlari berilgan (a < b).
a dan b gacha bo'lgan barcha butun sonlar kvadratlarning
yigindisini chiqaruvchi programma tuzing.
*/

// let a = 2;
// let b = 4;
// let x = 1;

// for(let i = a; i <= b; i++){
//   x *= i * i;
//   console.log(x);
// }

// #1

// let hafta = Number(prompt("Hafta kunini kiriting"));
// switch (hafta) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Bunday hafta kuni mavjud emas");
// }

// #2
// let k = Number(prompt("K sonini yozing"));

// switch (k) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("Bunday baho mavjud emas");
// }

// let oy = Number(prompt("Oy raqamini kiriting"));

// #3
// switch (oy) {
//   case 1:
//     console.log("Qish fasli: Yanvar oyi");
//     break;
//   case 2:
//     console.log("Qish fasli: Fevral oyi");
//     break;
//   case 3:
//     console.log("Bahor fasli: Mart oyi");
//     break;
//   case 4:
//     console.log("Bahor fasli: Aprel oyi");
//     break;
//   case 5:
//     console.log("Bahor fasli: May oyi");
//     break;
//   case 6:
//     console.log("Yoz fasli: Iyun oyi");
//     break;
//   case 7:
//     console.log("Yoz fasli: Iyul oyi");
//     break;
//   case 8:
//     console.log("Yoz fasli: Avgust oyi");
//     break;
//   case 9:
//     console.log("Kuz fasli: Sentabr oyi");
//     break;
//   case 10:
//     console.log("Kuz fasli: Oktabr oyi");
//     break;
//   case 11:
//     console.log("Kuz fasli: Noyabr oyi");
//     break;
//   case 12:
//     console.log("Qish fasli: Dekabr oyi");
//     break;
//     default:
//     console.log("Bunday oy mavjud emas");
// }

// #4
// let oy = Number(prompt("Oy raqamini kiriting"));

// switch (oy) {
//   case 1:
//     console.log("Yanvar oyi 31 kun");
//     break;
//   case 2:
//     console.log("Fevral oyi 28 kun");
//     break;
//   case 3:
//     console.log("Mart oyi 31 kun");
//     break;
//   case 4:
//     console.log("Aprel oyi 30 kun");
//     break;
//   case 5:
//     console.log("May oyi 31 kun");
//     break;
//   case 6:
//     console.log("Iyun oyi 30 kun");
//     break;
//   case 7:
//     console.log("Iyul oyi 31 kun");
//     break;
//   case 8:
//     console.log("Avgust oyi 31 kun");
//     break;
//   case 9:
//     console.log("Sentabr oyi 30 kun");
//     break;
//   case 10:
//     console.log("Oktabr oyi 31 kun");
//     break;
//   case 11:
//     console.log("Noyabr oyi 30 kun");
//     break;
//   case 12:
//     console.log("Dekabr oyi 31 kun");
//     break;
//     default:
//     console.log("Bunday oy mavjud emas");
// }

// #5
// let a = Number(prompt("a sonini yozing"));
// let amal = String(prompt("Amalni kiriting"));
// let b = Number(prompt("b sonini yozing"));
// switch (amal) {
//   case "+":
//     console.log(a+b);
//     break;
//   case "-":
//     console.log(a-b);
//     break;
//   case "*":
//     console.log(a*b);
//     break;
//   case "-":
//     console.log(a/b);
//     break;
//   default:
//     console.log("404 Not Found!");
// }

// #6
// let a = Number(prompt("Baho yozing"));
// switch (a) {
//   case 5:
//     console.log("800 ming stipendiya");
//     break;
//   case 4:
//     console.log("600 ming stipendiya");
//     break;
//   case 3:
//     console.log("400 ming stipendiya");
//     break;
//   default:
//     console.log(
//       "Sizga hech qandey stipendiya yoq chunki siz oqimaysiz umuman !"
//     );
// }

// #1
// let k = Number(prompt("Sonni yozing"));
// let n = 1;
// for(let i = n; i <= k; i++){
//   console.log(i);
// }


// #2
// let a = +prompt("a sonini yozing");
// let b = +prompt("b sonini yozing");
// for(let i = ++b; i < a; i++){
//   console.log(i);
// }
// console.log(--b);
// console.log(a);

// #3
// let a = +prompt("a sonini yozing");
// let b = +prompt("b sonini yozing");
// for(let i = --a; i > b; i--){
//   console.log(i);
// }

// #4
// let kg = 10000;

// for(let i = 1; i <= 10; i++){
//   console.log(${i} kg konfet ${i*kg} sum);
// }

// #5
// let x = 10000;
// for(let i = 0; i <= 1; i+=0.1){
//   console.log(${Math.round(i * 10) / 10} kg konfetning narxi: ${Math.round(i * 10) / 10 * x} so'm);
// }

// #6
// let x = 10000;
// for(let i = 1; i <= 2.1; i+=0.1){
//   console.log(${Math.round(i * 10) / 10} kg konfetning narxi: ${Math.round(i * 10) / 10 * x} so'm);
// }

// #7
// let a = 1;
// let b = 9;
// let x = 0;

// for(let i = a; i <= b; i++){
//   x += i;
// }
// console.log(x);

// #8
// let a = 1;
// let b = 9;
// let x = 0;

// for(let i = a; i <= b; i++){
//   x *= i;
// }
// console.log(x);

// #9
// let a = 2;
// let b = 4;
// let x = 1;

// for (let i = a; i <= b; i++) {
//   x *= i * i;
//   console.log(x);
// }


// #10
// let n = 0;
// for(let i = n; i <= 100; i++){
//   console.log(${1}/${i});
// }

// #11

// let a = 10;
// for(let i = 0; i <= a; i++){
//   if(i % 2 == 1){
//     console.log(i);
//   }
// }


// #12

// let a = 10;
// for(let i = 1; i <= a; i++){
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }


// #13



// #14
// let n = 20;
// for(let i = 2; i <= n; i++){
//   if(i % 2 == 0){
//     console.log(Math.pow(i,2));
//   }else {
//     console.log(Math.pow(i,2))
//   }
// }

// #15
// let n = 10;
// for(let i = n; i >= 1; i--){
//   console.log(i);
// }

// #16



// #17


// #18
// for(let i = 1; i <= 10; i++){
//   console.log(${i}!);
// }

// #19

// #20
// let x = 3;
// let n = 15;
// for(let i = 1; i<=n; i++){
//   if(i % x == 0){
//     console.log(i);
//   }
// }


// #20
// let n = 10;
// let x = 1;
// // for(let i = 0; i <= 10; i++){
// //   for(let j = x; i <= i; j++){
// //     console.log(${i}(${j}))
// //   }
// // } 

// for(let i = 1; i <= n; i++){
//   console.log(${i}(${i}));
// }