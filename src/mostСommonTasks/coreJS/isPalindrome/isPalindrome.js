/**
 * 📝 Проверка строки на палиндром
 *
 * Напиши функцию isPalindrome(str), которая возвращает true,
 * если строка читается одинаково слева направо и справа налево
 * (игнорируя пробелы, регистр и знаки препинания).
 *
 * @param {string} str
 * @returns {boolean}
 */

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

isPalindrome("racecar"); // true
isPalindrome("level"); // true
isPalindrome("frontend"); // false
isPalindrome("A man a plan a canal Panama"); // true
