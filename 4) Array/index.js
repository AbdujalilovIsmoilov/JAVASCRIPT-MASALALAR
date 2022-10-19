/*
1) n natural soni berilgan. Dastlabki n ta toq sondan
tashkil topgan massivni hosil qiling va elementlarni chiqaring.
*/

// let n = Number(prompt("Sonni yozing"));
// let arr = [];
// for(let i = 0; i < n; i++){
//   if(i % 2 == 1){
//     arr.push(i);
//   }
// }
// console.log(arr);

/*
2) n natural soni berilgan. 2 sonining dastlabki n ta darajasidan
tashkil topgan massivni hosil qiling va elementlarni chiqaring. (1,2,4,8..);
*/

// let n = 10;
// let array = [];

// for(let i = 1; i <= n; i++){
//   if(i % 2 == 0){
//     array.push(i);
//     console.log(Math.pow(2,i));
//   }
// }
// console.log(array);


/*
3) n natural soni va arifmetik progressiyaning dastlabki hadi A va ayirmadi
D berilgan. Arifmetik prograssiyaning dastlabki n ta hadidan tashkil topgan massivni hosil
qiling va elementlarini chiqaring. A[i] = A[i - 1] + D;
*/



/*
7) n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda
chiqaruvchi programma tuzilsin.
*/

// let array = [];

// let n = 10;

// for(let i = 1; i <= n; i++){
//   array.push(i);
// }
// let result = array.reverse();
// console.log(result);



/*
8) n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini orasidan toqlarini
indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
Massiv elementlari. 4 5 7 8 6 9
Natija: 5 7 9 toqlari soni = 3.
*/

// const n = [4, 5, 7, 8, 6, 9];
// let k = 0;
// let z = [];
// const i = n.sort((a, b) => {
//   return a - b;
// });
// i.filter(item => {
//   if (item % 2 == 1) {
//     k++;
//     z.push(item);
//   }
// });
// console.log(`Toqlar soni: ${k} ta`);
// console.log(z);


/*
9) n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan juftlarini
indekslarini kamayish tartibida chiqaruvchi va ularning sonini chiqaruvchi
va ularning sonini chiqaruvchi programma tuzilsin.
Massiv elementlari. 4 5 7 8 6 9
Natija: 6 8 4 juft soni = 3.
*/

// const n = [4, 5, 7, 8, 6, 9];
// let k = 0;
// let z = [];
// const i = n.sort((a, b) => {
//   return b - a;
// });
// i.filter(item => {
//   if (item % 2 == 0) {
//     k++;
//     z.push(item);
//   }
// });
// console.log(`Juftlar soni: ${k} ta`);
// console.log(z);


/*
10) n ta elementdan tashkil topgan massiv berilgan.
Dastlab massiv elementlari orasidan juftlarini
indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari
orasidan toqlarini indekslari kamayish tartibida chiqaruvchi
programma tuzilsin.
Massiv elementlari. 4 5 7 8 6 9
Natija: 4 8 6 9 7 5
*/

// let n = [4, 5, 7, 8, 6, 9];
// let k = 0;
// let j = 0;
// const juft = [];
// const toq = [];
// let r = n.sort((a, b) => {
//   return a - b;
// });
// r.filter(item => {
//   if (item % 2 == 0) {
//     k++;
//     juft.push(item);
//   }
//   if (item % 2 == 1) {
//     j++;
//     toq.push(item);
//   }
// });

// const plus = juft.sort((a, b) => {
//   return a - b;
// });

// const minus = toq.sort((a, b) => {
//   return b - a;
// });

// console.log(`Juft sonlar: ${plus.join(" ")}
// Toq sonlar: ${minus.join(" ")}
// Juft sonlar: ${k} ta
// Toq sonlar: ${j} ta`);


/*
12) n ta elementdan tashkil topgan massiv berilgan. (n juft son).
Massiv elementlari orasidan quyidagilarini chiqaruvchi programma
tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.
*/

// let k = Number(prompt("Sonni kiriting"));
// let n = [];
// for(let i = 2; i <= k; i+=2){
//   n.push(i);
//   console.log(`A[${i}]`);
// }

// const r = n.map(item => {
//   return item * 2;
// })

// console.log(r);


/*
14) n ta elementdan tashkil topgan massiv berilgan.
Dastlab massiv elementlari orasidan juft indekslilarni
keyin toq indekslilarni chiqaruvchi programma tuzilsin.
... Shart operatori ishlatilmasin.
*/

// let k = Number(prompt("Sonni kiriting"));
// let n = [];
// const juft = [];
// const toq = [];
// let s = 0;
// let t = 0;

// for(let i = 1; i <= 10; i+=2){
//   t++;
//   toq.push(i);
// }
// for(let j = 2; j <= 10; j+=2){
//   s++;
//   juft.push(j);
// }
// console.log(juft);
// console.log(toq);
// console.log(`Juft sonlar: ${s} ta`);
// console.log(`Toq sonlar: ${t} ta`);