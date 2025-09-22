/**
 * 📝 Поиск строк с подстрокой
 *
 * Напишите функцию findSubstring(substring, arr), которая принимает строку substring и
 * массив строк arr, и возвращает массив строк, которые содержат подстроку substring.
 *  - Подстрока должна быть найдена в любом месте строки.
 *  - Регистр символов имеет значение (чувствительность к регистру).
 *  - Если ни одна строка не содержит подстроку, вернуть пустой массив.
 *
 *  Примеры:
 *  Input 1: "oo", ["food", "door", "moon"]
 *  Output 1: ["food", "door", "moon"]
 *  Input 2: "xyz", ["apple", "banana", "cherry"]
 *  Output 2: []
 *
 * @param {string, string[]} substring, arr
 * @returns {string[]}
 *
 * @example
 *  Input 1: "oo", ["food", "door", "moon"]
 *  Output 1: ["food", "door", "moon"]
 *  Input 2: "xyz", ["apple", "banana", "cherry"]
 *  Output 2: []
 *
 */

export function findSubstring(substring, arr) {
  return arr.filter((str) => str.includes(substring));
}

const result = findSubstring("xyz", ["apple", "banana", "cherry"]);
console.log(result);
