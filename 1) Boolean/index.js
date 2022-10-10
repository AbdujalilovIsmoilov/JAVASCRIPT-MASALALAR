"use strict";

// 1) A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".

// let a = Number(prompt("Sonni yozing",""));
// let result = (a > 0 ? true : false);
// console.log(result);

// 2) A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".

// let a = Number(prompt("Sonni yozing",""));
// let result = (a % 2 == 1 ? true : false);
// console.log(result);

// 3) A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son".

// let a = Number(prompt("Sonni yozing",""));
// let result = (a % 2 == 0 ? true : false);
// console.log(result);

// 4) Ikkita butun son berilgan. Jumlani rostlikka tekshiring: "A > 2 va B <= 3".

// let a = Number(prompt("1-Sonni yozing",""));
// let b = Number(prompt("2-Sonni yozing",""));
// let result = (a > 2 && b <= 3 ? true : false);
// console.log(result);

// 5) Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 va B < -2".

// let a = Number(prompt("1-Sonni yozing",""));
// let b = Number(prompt("2-Sonni yozing",""));
// let result = (a >= 0 && b > -2 ? true : false);
// console.log(result);

// 6) Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C".

// let a = Number(prompt("1-Sonni yozing",""));
// let b = Number(prompt("2-Sonni yozing",""));
// let c = Number(prompt("3-Sonni yozing",""));
// let result = (a <= b <= c ? true : false);
// console.log(result);

/*** 
7) Uchta A, B, C butun sonlari berilgan. 
Jumlani rostlikka tekshiring: 
"B soni A va C sonlari orasida yotadi". 
**/

// let a = Number(prompt("1-Sonni yozing",""));
// let b = Number(prompt("2-Sonni yozing",""));
// let c = Number(prompt("3-Sonni yozing",""));
// let result = (a <= b <= c ? true : false);
// console.log(result);

/**  
8) Ikkita butun A va B sonlari berilgan. 
Jumlani rostlikka tekshiring: 
"A va B sonlari toq sonlar" 
*/

// let a = Number(prompt("1-Sonni yozing",""));
// let b = Number(prompt("2-Sonni yozing",""));
// let result = (a % 2 == 1 && b % 2 == 1 ? true : false);
// console.log(result);

/**
9) Ikkita butun A va B sonlari berilgan. 
Jumlani rostlikka tekshiring: 
"A va B sonlarining hech bo'lmaganda bittasi toq son". 
*/

// let a = Number(prompt("1-Sonni yozing", ""));
// let b = Number(prompt("2-Sonni yozing", ""));
// let result = (a % 2 == 0 && b % 2 == 1) || (a % 2 == 1 && b % 2 == 0) ? true : false;
// console.log(result);

/**
10) Ikkita butun son A va B sonlari berilgan.
Jumlani rostlikka tekshiring: 
"A va B sonlarining faqat bittasi toq son".
*/

// let a = Number(prompt("1-Sonni yozing", ""));
// let b = Number(prompt("2-Sonni yozing", ""));
// let result = ((a % 2 == 0 && b % 2 == 1) || (a % 2 == 1 && b % 2 == 0) ? true : false);
// console.log(result);

/**
11) Ikkita butun A va B sonlari berilgan. 
Jumlani rostlikka tekshiring:
"A va B sonlarining har ikkalasi ham yoki toq son yoki juft son"
*/

// let a = Number(prompt("1-Sonni yozing", ""));
// let b = Number(prompt("2-Sonni yozing", ""));
// let result = ((a % 2 == 0 && b % 2 == 0) || (a % 2 == 1 && b % 2 == 1) ? true : false);
// console.log(result);

/**
12) Uchta A, B, C butun sonlari berilgan. 
Jumlani rostlikka tekshiring:
"A, B, C sonlarning har biri musbat".
*/

// let a = Number(prompt("1-Sonni yozing", ""));
// let b = Number(prompt("2-Sonni yozing", ""));
// let c = Number(prompt("3-Sonni yozing", ""));
// let result = (a > 0 && b > 0 && c > 0 ? true : false);
// console.log(result);

/**
13) Uchta A, B, C butun sonlari berilgan.
Jumlani rostlikka tekshiring:
"A, B, C sonlarining hech bo'lmaganda bittasi musbat".
*/

// let a = Number(prompt("1-Sonni yozing", ""));
// let b = Number(prompt("2-Sonni yozing", ""));
// let c = Number(prompt("3-Sonni yozing", ""));
// let result =
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
//     ? true
//     : false;
// console.log(result);

/*  14) Uchta A, B, C butun sonlari berilgan. 
Jumlani rostlikka tekshiring:
"A, B, C sonlaridan faqat bittasi musbat." 
*/

// let a = Number(prompt("1-sonni yozing"));
// let b = Number(prompt("2-sonni yozing"));
// let c = Number(prompt("3-sonni yozing"));

// let result =
//   (a > 0 && b < 0 && c < 0) ||
//   (a < 0 && b > 0 && c < 0) ||
//   (a < 0 && b < 0 && c > 0)
//     ? true
//     : false;
// console.log(result);

/*
15) Uchta A, B, C butun sonlari berilgan.
Jumlani rostlikka tekshiring:
"A, B, C sonlardan faqat ikkitasi musbat son".
*/

// let a = Number(prompt("1-sonni yozing"));
// let b = Number(prompt("2-sonni yozing"));
// let c = Number(prompt("3-sonni yozing"));

// let result = (a < 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0) ? true : false;
// console.log(result);

/*
16) Musbat son berilgan.
Jumlani rostlikka tekshiring:
"Berilgan son ikki xonali juft son".
*/

// let a = Number(prompt("Sonni yozing",""));

// let result = (a % 2 == 0 && a > 9) ? true : false;
// console.log(result);

/*
17) Musbat son berilgan. 
Jumlani rostlikka tekshiring:
"Berilgan son uch xonali toq".
*/

// let a = Number(prompt("Sonni yozing",""));

// let result = (a % 2 == 0 && a > 29) ? true : false;
// console.log(result);

/*
18) Jumlani rostlikka tekshiring:
"Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng"
*/

// let a = Number(prompt("1-sonni yozing"));
// let b = Number(prompt("2-sonni yozing"));
// let c = Number(prompt("3-sonni yozing"));

// let result = ((a == b) || (b == c) || (a == c));
// console.log(result);


/*
19) Jumlani rostlikka tekshiring: 
"Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
*/

// let a = Number(prompt("1-sonni chiqaring"));
// let b = Number(prompt("2-sonni chiqaring"));
// let c = Number(prompt("3-sonni chiqaring"));
// let result = (a == -b) || 
//              (b == -c) ||
//              (a == -c) ?
//              true : false;
// console.log(result); 


/*
20) Uch xonali son berilgan.
Jumlani rostlikka tekshiring:
"Ushbu sonning barcha raqamlari xar xil".
*/

// let a = Number(prompt("Sonni chiqaring"));

// let yuz = Math.floor(a/100);
// let onlik_va_birlik = a%100;
// let onlik = Math.floor(onlik_va_birlik / 10);
// let bir = onlik_va_birlik % 10;
// let result = (bir !== onlik) && (bir !== yuz) && (onlik !== yuz) ? true : false;
// console.log(result);

