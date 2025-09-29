/**
 * 📝 Склеивание строк через разделитель
 *
 * Необходимо написать функцию joinStrings(separator, ...strings), 
 * которая склеивает строки через заданный разделитель. 
 * Функция должна принимать в качестве первого аргумента строку-разделитель, 
 * а остальные аргументы — строки, которые нужно объединить. 
 * Если строк нет, функция должна возвращать пустую строку.
 *
 * @param {string} separator
 * @param {string} strings
 * @returns {string}
 *
 * @example
    Input 1: ' ', 'Hello', 'World'
    Output 1: 'Hello World'

    Input 2: '-', 'a', 'b', 'c', 'd'
    Output 2: 'a-b-c-d'

    Input 3: ':', 'one', 'two'
    Output 3: 'one:two'

    Input 4: '/', '2023', '01', '01'
    Output 4: '2023/01/01'
 */

export function joinStrings(separator, ...strings) {
  if (strings.length === 0) return "";

  let result = "";

  for (let i = 0; i < strings.length; i++) {
    const currentStr = strings[i];

    result += `${currentStr}${i !== strings.length - 1 ? separator : ""}`;
  }

  return result;
}

////
function joinStringsAlternative(separator, ...strings) {
  if (strings.length === 0) return "";

  return strings.join(separator);
}
