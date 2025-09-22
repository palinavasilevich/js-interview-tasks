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
 * @param {{ value: string; order: number; expired: boolean}[]} arr
 * @returns {string} 
 *
 */

export function getConcated(
  arr: { value: string; order: number; expired: boolean }[]
): string {
  const filtered = arr.filter((item) => !item.expired);
  const sorted = filtered.sort((a, b) => a.order - b.order);
  const reversed = sorted.map((item) => [...item.value].reverse().join(""));
  const concatenated = reversed.join("");
  return Array.from(new Set(concatenated)).join("");
}
const data = [
  { value: "hello", order: 1, expired: false },
  { value: "world", order: 2, expired: false },
];

const result = getConcated(data);
console.log(result);
