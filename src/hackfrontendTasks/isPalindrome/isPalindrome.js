/**
 * 📝 Проверка строки на палиндром
 *
 *   Необходимо написать функцию isPalindrome(str), которая проверяет, является ли переданная 
 *   строка палиндромом. 
 *   Строка считается палиндромом, если она читается одинаково слева-направо и справа-налево, 
 *   игнорируя регистр букв, пробелы и знаки препинания.
 *
 * @param {string} str
 * @returns {boolean}
 *
 * @example
    Input 1: "А роза упала на лапу Азора"
    Output 1: true
    Input 2: "Do geese see God?"
    Output 2: true
    Input 3: "A man, a plan, a canal, Panama"
    Output 3: true
 */

function assertEquals(actual, expected, description) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${passed ? "✅" : "❌"} ${description}`);
}

function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-zа-яё0-9]/gi, "");
  return normalized === normalized.split("").reverse().join("");
}

assertEquals(
  isPalindrome("A man, a plan, a canal, Panama"),
  true,
  "String is palindrome."
);

assertEquals(
  isPalindrome("A man, a plan, a canal, Panamas"),
  false,
  "String isn't palindrome."
);
