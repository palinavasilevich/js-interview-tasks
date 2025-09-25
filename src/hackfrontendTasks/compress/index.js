/**
 * 📝 Сжатие списка чисел в диапазоны
 *
 * Дан список целых чисел, повторяющихся элементов в списке нет. 
 * Необходимо написать функцию compress(list), которая преобразует этот список в строку, 
 * сворачивая соседние по числовому ряду числа в диапазоны.
 *
 * @param {number[]} list
 * @returns {string}
 *
 * @example
    Input 1: [1, 4, 5, 2, 3, 9, 8, 11, 0]
    Output 1: "0-5,8-9,11"

    Input 2: [-10, -8, -7, -6]
    Output 2: "-10,-8--6"

    Input 3: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER + 1]
    Output 3: "-9007199254740991--9007199254740990"
 */

export function compressList(list) {
  if (!list || list.length === 0) return "";

  const sortedList = [...list].sort((a, b) => a - b);

  const result = [];
  let start = sortedList[0];
  let prev = sortedList[0];

  for (let i = 1; i <= sortedList.length; i++) {
    const currentItem = sortedList[i];

    if (currentItem !== prev + 1) {
      if (start === prev) {
        result.push(`${start}`);
      } else {
        result.push(`${start}-${prev}`);
      }
      start = currentItem;
    }

    prev = currentItem;
  }

  return result.join(",");
}
