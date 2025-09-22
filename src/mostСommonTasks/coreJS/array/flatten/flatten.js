/**
 * 📝 Flatten array
 *
 * Напиши функцию flatten(arr), которая принимает вложенный массив
 * и возвращает новый одномерный массив (разглаживает все уровни вложенности).
 *
 * @param {} arr
 * @returns {}
 *
 * @example
 *   flatten([1, [2, 3], [4, [5, 6]]]);
 *   // [1, 2, 3, 4, 5, 6]
 *
 *   flatten([[["a"]], "b", ["c", ["d"]]]);
 *  // ["a", "b", "c", "d"]

 *   flatten([1, [2, [3, [4]]]]);
 *   // [1, 2, 3, 4]
 */

export function flatten1(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...item.flat(Infinity));
    } else {
      result.push(item);
    }
  }
  return result;
}

export function flatten2(arr) {
  return arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );
}

export function flatten(arr) {
  const result = [];

  const traversalArr = (items) => {
    if (Array.isArray(items)) {
      for (const item of items) {
        traversalArr(item);
      }
    } else {
      result.push(items);
    }
  };

  traversalArr(arr);

  return result;
}

const result = flatten([1, [2, 3], [4, [5, 6]]]);
console.log("result", result);
