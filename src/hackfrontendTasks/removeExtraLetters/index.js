/**
 * 📝 Удаление лишнего дублирования букв
 *
 * Напишите функцию, которая принимает строку, содержащую лишнее дублирование букв 
 * (например: 'нууужно'), и возвращает строку, 
 * где каждая буква встречается только один раз подряд.
    - Регистр букв сохраняется.
    - Символы, не являющиеся буквами, также остаются в строке, но без дублирования.
 *
 * @param {string} paramName
 * @returns {string}
 *
 * @example
    Input 1: "нууужно"
    Output 1: "нужно"

    Input 2: "ллллиииишшшнийййй тттексттт"
    Output 2: "лишний текст"
 */

export function removeExtraLetters(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    const nextLetter = str[i + 1];

    if (currentLetter != nextLetter) {
      result += currentLetter;
    }
  }

  return result;
}

///
export function removeExtraLettersSecondVariant(str) {
  return [...str].reduce((acc, letter, index, arr) => {
    if (letter !== arr[index - 1]) acc += letter;
  }, "");
}

///
export function removeExtraLettersThirdVariant(str) {
  return str.replace(/(.)\1+/g, "$1");
}
