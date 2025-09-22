/**
 * 📝 factorial
 *
 *  Напишите функцию factorial(n), которая возвращает факториал числа n.
 *
 *  Факториал — это произведение всех целых чисел от 1 до n.
 *
 *  Формула: n! = n × (n-1) × (n-2) × ... × 1
 *
 * @param {number} n
 * @returns {number}
 *
 *  @example
    factorial(5); // 120  (5*4*3*2*1)
    factorial(0); // 1    (по определению)
    factorial(1); // 1
 */

function assertEquals(actual, expected, description = "") {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`result = ${JSON.stringify(actual)}`);
  console.log(`${passed ? "✅" : "❌"} ${description}`);
}

function factorial(n) {
  if (n === 0) return 1;

  if (n === 1) return n;

  return factorial(n - 1) * n;
}

////////////////////////////

function factorialIterative(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

assertEquals(factorial(5), 120);
assertEquals(factorial(0), 1);
