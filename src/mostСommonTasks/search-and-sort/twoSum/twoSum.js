/**
 * 📝 Two Sum
 *
 * Напиши функцию twoSum(nums, target), которая принимает массив чисел nums и число target.
 * Нужно найти индексы двух чисел в массиве, сумма которых равна target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 *
 * @example
 * twoSum([2, 7, 11, 15], 9);
 *  // [0, 1] потому что nums[0] + nums[1] = 2 + 7 = 9
 *
 *  twoSum([3, 2, 4], 6);
 *  // [1, 2] потому что nums[1] + nums[2] = 2 + 4 = 6
 *
 *   twoSum([3, 3], 6);
 *   // [0, 1]
 */

export function twoSum(nums, target) {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const diff = target - currentNum;

    if (numsMap.has(diff)) {
      return [numsMap.get(diff), i];
    }

    numsMap.set(currentNum, i);
  }
}

const result1 = twoSum([2, 7, 11, 15], 9);
console.log(result1);

const result2 = twoSum([3, 2, 4], 6);
console.log(result2);

const result3 = twoSum([3, 3], 6);
console.log(result3);
