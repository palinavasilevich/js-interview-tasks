/**
 * 📝 Капитализация слов в строке
 *
 * Цель:
 *   Написать функцию `capitalize(input)`, которая принимает строку `input`
 *   и возвращает её копию, где каждое слово начинается с заглавной буквы.
 *
 * Детали:
 * - "Слово" — последовательность юникод-символов из группы "letters".
 * - Слова с дефисами (например, "что-то") считаются одним словом.
 *
 * @param {string} input - The input string to transform.
 * @returns {string} A new string with capitalized words.
 *
 * @example
 * capitalize('foo-bar baz')
 * // → 'Foo-bar Baz'
 */

export function capitalize(input) {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
