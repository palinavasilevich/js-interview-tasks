/**
 * 📝 Проверка на анаграммы
 *
 *  Необходимо написать функцию isAnagram(first, second), которая проверяет,
 *  являются ли две строки анаграммами. Условия:
 *  Функция принимает два аргумента:
 *   - first — первая строка для проверки.
 *   - second — вторая строка для проверки.
 *   - Две строки являются анаграммами, если они содержат одинаковые символы с одинаковой частотой.
 *   - Строки могут содержать только латинские буквы в нижнем регистре (a-z).
 *
 * @param {string, string} first, second
 * @returns {boolean}
 *
 * @example
 *  Input 1: "finder", "friend"
 *  Output 1: true
 *
 *  Input 2: "test", "sets"
 *  Output 2: false
 *
 *  Input 3: "abc", "aaa"
 *  Output 3: false
 */

export function isAnagram(first, second) {
  if (first.length !== second.length) return false;

  return first.split("").sort().join("") === second.split("").sort().join("");
}

const resultTrue = isAnagram("finder", "friend");
console.log("resultTrue === ", resultTrue);

const resultFalse = isAnagram("test", "sets");
console.log("resultFalse ===", resultFalse);
