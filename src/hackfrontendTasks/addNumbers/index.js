/**
 * 📝 Сложение чисел, представленных массивами
 *
 *  Напишите функцию, которая принимает на вход два массива arr1 и arr2, представляющих числа, 
 *  и возвращает их сумму в виде массива.
    - Каждый элемент массивов arr1 и arr2 представляет одну цифру числа.
    - Результат также должен быть представлен в виде массива, где каждый элемент - одна цифра.
    - Если в результате есть ведущие нули, они должны быть сохранены.
    *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 *
 * @example
    Input 1: [1, 2, 3], [4, 5, 6]
    Output 1: [5, 7, 9]

    Input 2: [5, 4, 4], [4, 5, 6]
    Output 2: [1, 0, 0, 0]
 */

export function addNumbers(arr1, arr2) {
  const num1 = BigInt(arr1.join(""));
  const num2 = BigInt(arr2.join(""));

  return (num1 + num2).toString().split("").map(Number);
}

export function addNumbersSecondVersion(arr1, arr2) {
  const sumArr = [];
  let rest = 0;

  const copyArr1 = [...arr1];
  const copyArr2 = [...arr2];

  while (copyArr1.length < copyArr2.length) copyArr1.unshift(0);
  while (copyArr2.length < copyArr1.length) copyArr2.unshift(0);

  for (let i = copyArr1.length - 1; i >= 0; i--) {
    const sum = copyArr1[i] + copyArr2[i] + rest;
    rest = Math.floor(sum / 10);
    sumArr.unshift(sum % 10);
  }

  if (rest > 0) sumArr.unshift(rest);

  return sumArr;
}
