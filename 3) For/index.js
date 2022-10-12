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