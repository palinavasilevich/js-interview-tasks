/**
 * 📝 Найти самый глубокий максимальный элемент
 *
 * Напишите функцию findDeepestMaxElement(array), которая принимает вложенный массив чисел array.
 * Условия:
 * Массив может содержать числа или вложенные массивы любой глубины.
 * Функция должна вернуть максимальный элемент, который находится на самой глубокой вложенности.
 *
 * @param {number[]} items 
 * @returns {number} 
 *
 * @example
    Input 1: [1, [[20, 1, [101]], 2], [[-2], [[102, 100]]] ]
    Output 1: 102
    Input 2: [10, [5, [15, [50]], 20]]
    Output 2: 50
 */

function findDeepestMaxElement(array) {
  let deepestLevel = -1;
  let maxAtDeepest = -Infinity;

  function traverse(items, level) {
    if (Array.isArray(items)) {
      for (const item of items) {
        traverse(item, level + 1);
      }
    } else if (typeof items === "number") {
      if (level > deepestLevel) {
        deepestLevel = level;
        maxAtDeepest = items;
      } else if (level === deepestLevel) {
        maxAtDeepest = Math.max(maxAtDeepest, items);
      }
    }
  }

  traverse(array, 0);
  return maxAtDeepest;
}

const result = findDeepestMaxElement([
  1,
  [[20, 1, [101]], 2],
  [[-2], [[102, 100]]],
]);

console.log(result);
