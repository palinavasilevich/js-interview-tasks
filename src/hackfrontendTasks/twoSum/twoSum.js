/**
 * 📝 Найти индексы элементов для суммы
 *
 * Detailed description: Необходимо написать функцию twoSum(nums, target), которая принимает массив чисел nums и число target. Функция должна возвращать массив с двумя индексами элементов,
 * сумма которых равна target. Гарантируется, что всегда существует ровно одно решение.
 *
 * @param {number[], number} nums target
 * @returns {number[]}
 *
 * @example
 *  Input 1: [3, 3], 6
 *  Output 1: [0, 1]
 *  Input 2: [2, 7, 11, 5, 9, 10, 15], 9
 *  Output 2: [0, 1]
 */

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(current, i);
  }
}

const result = twoSum([3, 5, 56, 3], 6);
const result2 = twoSum([2, 7, 11, 5, 9, 10, 15], 9);

console.log("result ===", result);
console.log("result ===", result2);
