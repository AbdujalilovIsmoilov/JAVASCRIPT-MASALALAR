"use strict";

let x = Number(prompt("Sonni yozing"), "");

function FizzBuzz(x) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else if (isNaN(x)) {
    console.log("Son emas");
  } else {
    console.log("FizzBuzzda bunday son mavjud emas");
  }
}
FizzBuzz(x);
