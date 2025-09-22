/**
 * 📝 Разность массивов
 *
 * Необходимо написать функцию difference(arr1, arr2), которая принимает два массива 
 * чисел arr1 и arr2. Функция должна вернуть массив, содержащий элементы из arr1, 
 * которых нет в arr2. Условия:
    - Каждый массив содержит только числа.
    - Массивы могут быть пустыми.
    - Порядок элементов в возвращаемом массиве должен соответствовать их порядку в longArr1.
 *
 * @param {string} paramName
 * @returns {string}
 *
 * @example
    Input 1: [1, 4, 3, 2], [1, 2]
    Output 1: [4, 3]

    Input 2: [5, 6, 7], [7, 8, 9]
    Output 2: [5, 6]
 */

function assertEquals(actual, expected, description = "") {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    `${passed ? "✅" : "❌"} result = ${JSON.stringify(actual)} ${description}`
  );
}

// function difference(arr1, arr2) {
//   return arr1.reduce((res, val) => {
//     if (!arr2.includes(val)) {
//       res.push(val);
//     }

//     return res;
//   }, []);
// }

////////////////

function difference(arr1, arr2) {
  const setFromArr2 = new Set(arr2);

  return arr1.filter((item) => !setFromArr2.has(item));
}

assertEquals(difference([1, 4, 3, 2], [1, 2]), [4, 3]);
