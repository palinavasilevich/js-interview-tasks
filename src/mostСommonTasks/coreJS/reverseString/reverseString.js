/**
 * 📝 Reverse string
 *
 * Написать функцию reverseString(str),
 * которая принимает строку и возвращает её в перевернутом виде.
 *
 * @param {string} str
 * @returns {string}
 *
 */

export function reverseString(str) {
  return str.split("").reverse().join("");
}

// export function reverseString(str) {
//   const letters = str.split("");
//   let result = "";

//   for (let i = letters.length - 1; i >= 0; i--) {
//     result += letters[i];
//   }

//   return result;
// }

// export function reverseString(str) {
//   return str.split("").reduce((res, letter) => {
//     res = letter + res;
//     return res;
//   }, "");
// }
