/**
 * 📝 Рекурсивная сумма всех чисел в объекте
 *
 * Напишите функцию, которая принимает объект и рекурсивно вычисляет сумму всех чисел,
 * находящихся внутри него.
 * Если объект содержит вложенные объекты, необходимо рекурсивно проходить по ним.
 * Если внутри объекта есть нечисловые значения, их игнорировать.
 *
 *
 * @param {any{}} obj
 * @returns {number}
 *
 * @example
 * Input 1: {
            x: 5,
            y: {
                z: 7,
                w: {
                v: -3,
                },
            },
            }
    Output 1: 9


    Input 2: {
            a: "text",
            b: {
                c: true,
                d: null,
                e: 5,
            },
            }
    Output 2: 5
 */

export function recursiveSum(obj) {
  let result = 0;

  for (const key in obj) {
    const currentValue = obj[key];

    if (typeof currentValue === "number") {
      result += currentValue;
    } else if (
      currentValue &&
      currentValue !== null &&
      typeof currentValue === "object"
    ) {
      result += recursiveSum(currentValue);
    }
  }

  return result;
}
