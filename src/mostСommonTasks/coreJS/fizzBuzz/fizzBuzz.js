/**
 * 📝 fizzBuzz
 *
 *  Напиши функцию fizzBuzz(n), которая выводит числа от 1 до n включительно.

    Если число делится на 3 → вместо числа вывести "Fizz".

    Если число делится на 5 → вывести "Buzz".

    Если число делится и на 3, и на 5 → вывести "FizzBuzz".

    В остальных случаях вывести само число.
 *
 * @param {number} num
 * @returns {undefined}
 *
 * @example
    fizzBuzz(5);
    // 1
    // 2
    // Fizz
    // 4
    // Buzz
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/////////////////////////

function fizzBuzzAlternative(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
  }
}

// fizzBuzzAlternative(5);
fizzBuzz(5);
// fizzBuzz(15);
