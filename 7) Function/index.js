/* #1. FuncSimple1. Ixtiyoriy sonning 3 - darajasini hisoblovchi
PowerA3 nomli funksiya orqali A, B, C haqiqiy sonlarining va D, E butun
sonlarining 3 - darajasini hisoblovchi programma tuzilsin.
*/

// function PowerA3(A, B, C, D, E) {
//   console.log(`A: ${Math.pow(A, 3)}. B: ${Math.pow(B, 3)}.
// C: ${Math.pow(C, 3)}.
// D: ${D, 3}.
// E: ${E, 3}`);
// }
// PowerA3(-1, 3, 3.6, 4, 5);



/* #2. FuncSimple2. Ihtiyoriy sonning 2,3,4 - darajasini hisoblovchi
PowerA234 nomli funksiya hosil qiling. PowerA234 funksiya orqali
A, B, C haqiqiy sonlarning 2, 3, 4 - darajasini hisoblovchi programma
void PowerA234(float, float *, float *, float *);
*/

// function PowerA234(A, B, C) {
//   console.log(`A2: ${Math.pow(A, 2)}. A3: ${Math.pow(A, 3)}. A4: ${Math.pow(A, 4)}
// B2: ${Math.pow(B, 2)}. B3: ${Math.pow(B, 3)}. B4: ${Math.pow(B, 4)}
// C2: ${Math.pow(C, 2)}. C3: ${Math.pow(C, 3)}. C4: ${Math.pow(C, 4)}`);
// }
// PowerA234(2, 3, 4);


/* #3 FuncSimple3. Ishlanmagan
*/


/* #4 FuncSimple4. Ishlanmagan
*/


/* #5 FuncSimple5. Ishlanmagan
*/


/* #6 FuncSimple6. Ishlanmagan
*/


/* #7 FuncSimple7. Butun musbat sonining teskari tartibda
chiqaruvchi InvertDigit nomli funksiya hosil qiling.
Bu funksiya orqali a, b, c sonlarining raqamlari teskari
tartibda chiqaruvchi programma tuzilsin.
Funksiya prototipi quyidagicha bo'lishi mumkin:
int invertDigit(int).
*/

// let a = Number(prompt("A ning qiymatini chiqaring"));
// let b = Number(prompt("B ning qiymatini chiqaring"));
// let c = Number(prompt("C ning qiymatini chiqaring"));

// function InvertDigit(...a) {
//   const result = a.sort((x, y) => {
//     return y - x;
//   });
//   for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
//   }
//   return;
// }
// InvertDigit(a, b, c);


/* #8
*/


/* #9
*/


/* #10 Ikkita sonning qiymatini almashtiruvchi Swap nomli funksiya
hosil qiling. Swap funksiyasi orqali A, B, C, D sonlaridan
(A,B), (D,C) juftliklarining qiymatlarini almashtiruvchi
programma tuzilsin.
Funksiya prototipi quyidagicha bo'lishi mumkin:
void Swap (int * int);
*/

// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let array = [a,b,c,d];
// function Swap(a,b,c,d){
//   [a,b] = [b,a], [c,d] = [d,c];
//   console.log(a,b,c,d);
//   return;
// }
// Swap(a,b,c,d);



/* #11 X va Y sonlaridan X ga va kattasini Y ga yozuvchi Minmax(X,Y) funksiyasini
hosil qiling. Minmax(X,Y) funksiyasini hosil qiling. Minmax funksiyasini 4 marta 
chaqish orqali a,b,c,d butun sonlaridan kattasini va kichigini aniqlovchi 
programma tuzilsin. 
*/


/* #12 A, B, C sonlarini o'sish tartibida joylashtiruvchi SortInc3(A,B,C) funksiyasini
hosil qiling. Ya'ni A, B, C sonlari qiymatlarini shunday almashtirishki, natijada A ning 
qiymati eng kichik va C ning qiymati eng katta bo'lsin. Bu funksiya orqali (A1,B1,C1)
va (A2,B2,C2) sonlarini tartiblang.
*/

// let r = [];
// function SortInc3(A, B, C) {
//   r.push(A, B, C)
//   if (A > B && B < A) {
//     return [A, C] = [C, A]
//   }

// }
// SortInc3(5, 2, 10);
// let result = r.sort((a, b) => {
//   return a - b;
// });
// console.log(result);
