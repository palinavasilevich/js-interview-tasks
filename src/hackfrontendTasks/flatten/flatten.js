/**
 * 📝 Разворачивание вложенных массивов(flatten)
 *
 *  Необходимо написать функцию flatten(array), которая разворачивает вложенные массивы в
 *  исходный массив. Данные остальных типов должны остаться без изменений.
 *  Решение должно учитывать любую вложенность элементов
 *  (т.е. не должно содержать рекурсивные вызовы).
 *  Ограничения:
 *  - Рекурсию использовать нельзя
 *  - Встроенный метод Array.prototype.flat() использовать нельзя
 *  - Нельзя использовать никакие методы модифицирующие массивы после создания кроме pop/push
 *
 * @param {any[]} array
 * @returns {any[]}
 *
 * @example
    Input 1: [0, [1, [2, 3]], 4]
    Output 1: [0, 1, 2, 3, 4]

    Input 2: [1, "string", [2, [3, "4"]], { a: 1 }]
    Output 2: [1, "string", 2, 3, "4", { a: 1 }]

    Input 3: [[], [1], [[2, 3]], [[4], [5, [6]]]]
    Output 3: [1, 2, 3, 4, 5, 6]

    Input 4: [1, [2, [3, [4], [5, [6], [7, [8, [9]]]]]]]
    Output 4: [1, 2, 3, 4, 5, 6, 7, 8, 9]

    Input 5: [1, [null, undefined], [[true, false]]]
    Output 5: [1, null, undefined, true, false]
 */

function assertEquals(actual, expected, description = "") {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    `${passed ? "✅" : "❌"} result = ${JSON.stringify(actual)} ${description}`
  );
}

function flatten(array) {
  const result = [];

  const stack = [];
  for (let i = array.length - 1; i >= 0; i--) {
    stack.push(array[i]);
  }

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (Array.isArray(currentNode)) {
      for (let i = currentNode.length - 1; i >= 0; i--) {
        stack.push(currentNode[i]);
      }
    } else {
      result.push(currentNode);
    }
  }

  return result;
}

assertEquals(flatten([0, [1, [2, 3]], 4]), [0, 1, 2, 3, 4]);
