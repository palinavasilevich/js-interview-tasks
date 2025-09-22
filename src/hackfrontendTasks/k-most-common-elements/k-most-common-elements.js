// ============================== //
// K наиболее частых элементов
// ============================== //
// Напишите функцию, которая принимает массив целых чисел nums и целое число k, и возвращает массив из k наиболее часто встречающихся элементов. Условия:
// - Если k больше количества уникальных элементов в массиве, вернуть все уникальные элементы.
// Примеры:
// Input 1: [1, 1, 1, 2, 2, 3], 2
// Output 1: [1, 2]
// Input 2: [1, 2, 3, 4, 5], 2
// Output 2: [1, 2]

function arrOfK(nums, k) {
  const frequency = {};

  for (let num of nums) {
    if (!frequency[num]) {
      frequency[num] = 1;
    } else {
      frequency[num] += 1;
    }
  }

  const sorted = Object.entries(frequency)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(0, k)
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return Object.keys(sorted).map((num) => +num);
}

function arrOfK2(nums, k) {
  const frequency = {};

  // 1. Подсчёт частоты
  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // 2. Сортировка по убыванию частоты
  return Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a]) // теперь сортируем по частоте
    .slice(0, k) // берём первые k элементов
    .map(Number); // превращаем строки обратно в числа
}

console.log(arrOfK2([2, 2, 3, 1, 1, 1], 2));
