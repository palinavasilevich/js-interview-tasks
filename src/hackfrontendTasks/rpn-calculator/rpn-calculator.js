// ============================== //
// Калькулятор обратной польской нотации
// ============================== //
// Напишите функцию calc(str), которая вычисляет результат выражения в обратной польской нотации (ОПН).
//  ОПН представляет собой выражение, в котором операнды и операторы записаны в особом порядке:
// - Операнды (числа) и операторы (+, -, *, /) разделяются пробелами.
// - Операция выполняется над двумя последними числами, встреченными перед оператором.
// - Выражение вычисляется слева направо.
// Если входная строка некорректна, функция должна вернуть сообщение об ошибке. Возможные ошибки:
// "Error in Syntax" — если выражение содержит синтаксическую ошибку.
// "Error in Operands" — если операнд не является числом.
// "Division by zero" — если в выражении происходит деление на ноль.
// Примеры:
// Input 1: "8 2 / 3 +"
// Output 1: 7
// Input 2: "7 2 3 * -"
// Output 2: 1

export function rpnCalculator(str) {
  const OPERATIONS = ["+", "-", "*", "/"];
  const stack = [];

  const symbols = str.split(" ");
  for (let symbol of symbols) {
    if (!isNaN(symbol)) {
      stack.push(+symbol);
    } else if (OPERATIONS.includes(symbol)) {
      if (stack.length > 2) return "Error in Syntax";

      const b = stack.pop();
      const a = stack.pop();

      if (symbol === "/" && b === 0) return "Division by zero";

      switch (symbol) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    } else {
      return "Error in Operands";
    }
  }

  return stack.length === 1 ? stack[0] : "Error in Syntax";
}
