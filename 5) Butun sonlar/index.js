/*
Integer1. Uzunlik L santimetrda berilgan.
Undagi to'liq metrlar sonini aniqlovchi 
programma tuzilsin. (1m=100cm)
*/

// let L = Number(prompt("Sm ni kiriting"));
// let sm = 100;
// let result = L / sm;
// console.log(`${L} sm ${result} metr`);


/*
Integer2. Og'irlik M kilogramda berilgan. 
Undagi to'liq tonnalar sonini chiqaruvchi 
programma tuzilsin. (1t=1000kg);
*/

// let kg = 1000;
// let M = Number(prompt("Kg ni yozing"));
// let result = M / kg;
// console.log(`${M} kg => ${result} tonna`);


/*
Integer3. Faylning hajmi baytlarda berilgan.
Bo'lib butunni olish operatsiyasidan foydalanib 
fayl hajmining to'liq kilobaytlarda ifodalovchi
programma tuzilsin. (1Kb = 1024 bayt).
*/

// let Kb = 1024;
// let bayt = Number(prompt("Kb ni yozing"));
// let result = bayt / Kb  ;
// console.log(`${Kb} Bayt => ${result} Kb`);


/*Integer4. A va B (A < B) musbat sonlari berilgan.
A kesmada, B kesmani necha marta joylashtirish 
mumkinligini aniqlovchi programma tuzilsin.
*/

// let a = Number(prompt("1-sonni yozing"));
// let b = Number(prompt("2-sonni yozing"));
// let result = Math.floor(a / b);
// console.log(`${a} kesmada ${b} kesmani ${result} marta joylashtirish mumkin.`);


/*Integer5. A va B (A > B) musbat sonlari berilgan.
A kesmada B kesmani necha marta joylashtirish mumkin.
A kesmada B kesmaning joylashmagan qismini aniqlovchi programma tuzilsin.
*/

// let a = Number(prompt("1-sonni yozing"));
// let b = Number(prompt("2-sonni yozing"));
// let result = Math.floor(a / b);
// let qoldiq = a % b;
// console.log(`${a} kesmada ${b} kesmani ${result} marta joylashtirish mumkin. Joylashmagan qismi ${qoldiq}`);


/*Integer6. Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi 
raqamini, so'ng birlar xonasidagi raqamini chiqaruvchi programma tuzilsin.
*/

// let a = Number(prompt("Sonni yozing"));
// let birlik = Math.floor(a / 10);
// let onlik = a % 10;
// console.log(`Birlik xonasi: ${birlik}. Onliklar xonasi: ${onlik}`);


/*Integer7. Ikki xonali son berilgan. Uning raqamlar yig'indisini 
aniqlovchi programma tuzilsin.
*/

// let a = Number(prompt("Sonni yozing"));
// let birlik = Math.floor(a / 10);
// let onlik = a % 10;
// let result = birlik + onlik;
// console.log(result);


/*Integer8. Ikki xonali son berilgan. Uning raqamlari o'rnini 
almashtirilishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin. 
*/

// let a = Number(prompt("Sonni yozing"));
// let birlik = Math.floor(a / 10);
// let onlik = a % 10;
// [birlik,onlik] = [onlik,birlik];
// console.log(parseInt(birlik + "" +onlik));


/*Integer9. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi
programma tuzilsin.
*/

// let a = Number(prompt("Sonni yozing"));
// let result = a > 99 ? `${a % 1000} soni yuzlik son` : `${a} soni yuzlik son emas`;
// console.log(result);


/*Integer10. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamini
so'ng o'nliklar xonasidagi raqamini chiqaruvchi programma tuzilsin.
*/

// let a = Number(prompt("Sonni yozing"));
// let birlik = a > 99 && a <= 999 ? Math.floor(a / 100) : `${a} bu yuzlik son emas`;
// let onlik = a % 100;
// console.log(`Birliklar xonasidagi son ${birlik} va O'nliklar xonasidagi son ${onlik}`);

/*Integer11. Uch xonali son berilgan. Uning raqamlar yigindisini 
aniqlovchi programma tuzilsin.
*/