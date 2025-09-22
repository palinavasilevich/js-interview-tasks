/**
 * 📝 Бинарный поиск
 *
 *  Напишите функцию binarySearch(arr, target), которая ищет элемент в отсортированном по 
 *  возрастанию массиве и возвращает его индекс.
 *  Если элемент не найден — верните -1.
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 *
 * @example
    binarySearch([1, 3, 5, 7, 9], 3); // 1
    binarySearch([1, 3, 5, 7, 9], 7); // 3
    binarySearch([1, 3, 5, 7, 9], 4); // -1
 */

// ⚡ Бинарный поиск (если массив отсортирован)
// Берём середину массива.
// Если середина = target → нашли.
// Если target < middle → ищем только в левой половине.
// Если target > middle → ищем только в правой половине.
// Повторяем, пока не найдём или не останется элементов.

export function assertEquals(actual, expected, description) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${passed ? "✅" : "❌"} ${description}`);
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

assertEquals(binarySearch([1, 3, 5, 7, 9], 3), 1, "Base example");
assertEquals(binarySearch([1, 3, 5, 7, 9], 7), 3, "Base example");
assertEquals(binarySearch([1, 3, 5, 7, 9], 4), -1, "Not found");
