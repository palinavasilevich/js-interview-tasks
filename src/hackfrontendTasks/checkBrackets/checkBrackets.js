/**
 * 📝 Проверка корректности скобок
 *
 *  Напишите функцию checkBrackets(str), которая проверяет корректность расстановки скобок в строке.
 *   Строка может содержать три вида скобок:
 *   Круглые ()
 *   Фигурные {}
 *   Квадратные []
 *   Функция должна возвращать true,
 *   если все скобки закрыты и вложены корректно, иначе false.
 *
 * @param {string} str
 * @returns {boolean}
 *
 * @example
 *  Input 1: "{Hi(good day)!}"
 *  Output 1: true
 *
 *  Input 2: "{nice[day}"
 *  Output 2: false
 *
 */

// export function checkBrackets(str) {
//   const bracketsType = ["(", ")", "{", "}", "[", "]"];
//   const brackets = str.split("").filter((s) => bracketsType.includes(s));

//   const bracketsPars = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   const openedBrackets = [];

//   for (const bracket of brackets) {
//     if (bracket in bracketsPars) {
//       openedBrackets.push(bracket);
//     } else if (bracket !== bracketsPars[openedBrackets.at(-1)]) {
//       return false;
//     } else {
//       openedBrackets.pop();
//     }
//   }

//   return openedBrackets.length === 0;
// }

export function checkBrackets(str) {
  const pairs = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  const opened = [];

  for (const ch of str) {
    if (pairs.has(ch)) {
      opened.push(ch);
    } else if ([...pairs.values()].includes(ch)) {
      const last = opened.pop();
      if (pairs.get(last) !== ch) {
        return false;
      }
    }
  }

  return opened.length === 0;
}

const result = checkBrackets("{Hi(good day)!}");

console.log(result);
