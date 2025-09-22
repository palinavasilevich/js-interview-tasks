/**
 * 📝 Конкатенация строк из объектов
 *
 * Detailed description: Напишите функцию getConcated(arr), 
 * которая принимает массив объектов arr и возвращает строку, сформированную по следующим правилам:
    - Элементы должны быть упорядочены по полю order в порядке возрастания.
    - Элементы с полем expired: true должны быть исключены.
    - Поле value каждого объекта должно быть перевёрнуто (символы в обратном порядке).
    - Строка не должна содержать повторяющихся символов.
 *
 * @param {string} paramName - Description of the parameter.
 * @returns {string} Description of the return value.
 *
 * @example
 * functionName(input)
 * // → output
 */

export function getConcated(arr) {
  return arr
    .filter((word) => !word.expired)
    .sort((a, b) => a.order - b.order)
    .map((word) => word.value.split("").reverse().join(""))
    .join("")
    .split("")
    .reduce((result, letter) => {
      if (result.indexOf(letter) === -1) {
        result += letter;
      }

      return result;
    }, "");
}

const data = [
  { value: "hello", order: 1, expired: false },
  { value: "world", order: 2, expired: false },
];

const result = getConcated(data);
console.log(result);
