/**
 * 📝 Уникальные значения массива
 *
 * Напиши функцию unique(arr), которая принимает массив
 * и возвращает новый массив только с уникальными значениями (без повторов).
 *
 * @param {T[]} arr
 * @returns {T[]}
 *
 * unique([1, 2, 2, 3, 4, 4, 5])
 * // [1, 2, 3, 4, 5]
 *
 * unique(["a", "b", "a", "c", "b"])
 * // ["a", "b", "c"]
 *
 * unique([true, true, false, true])
 * // [true, false]
 */

// export function unique(arr) {
//   return [...new Set(arr)];
// }

/////////////////////////////////////

// export function unique(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

/////////////////////////////////////

export function unique(arr) {
  const result = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

const result1 = unique([1, 2, 2, 3, 4, 4, 5]);
// [1, 2, 3, 4, 5]

const result2 = unique(["a", "b", "a", "c", "b"]);
// ["a", "b", "c"]

const result3 = unique([true, true, false, true]);
// [true, false]

console.log(result1);
console.log(result2);
console.log(result3);
