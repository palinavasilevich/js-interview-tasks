/**
 * 📝 Проверка на панграмму
 *
 * Напишите функцию isPangram(sentence), которая проверяет, является ли строка панграммой.
    - Панграмма — это строка, которая содержит каждую букву алфавита хотя бы один раз.
    - Строка может содержать символы, не являющиеся буквами, их следует игнорировать.
 *
 * @param {string[]} sentence
 * @returns {boolean}
 *
 * @example
    Input 1: "the"
    Output 1: false
    Input 2: "TheQuickBrownFoxJumpsOverTheLazyDog"
    Output 2: true
 */

// import { assertEquals } from "../../helpers/assertEquals";

function assertEquals(actual, expected, description) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${passed ? "✅" : "❌"} ${description}`);
}

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function isPangram(sentence) {
  const normalizedStr = sentence.toLowerCase().replace(/[^a-z]/g, "");
  const uniqueSymbols = new Set(normalizedStr);

  return uniqueSymbols.size === LETTERS.length;
}

assertEquals(isPangram("the"), false, "Sentence isn't pangram.");
assertEquals(
  isPangram("thequickbrownfoxjumpsoverthelazydog. sd sd"),
  true,
  "Sentence is pangram."
);
