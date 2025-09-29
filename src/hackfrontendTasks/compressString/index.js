/**
 * 📝 Short description of the function
 *
 * Detailed description: explain rules, constraints, etc.
 *
 * @param {string} paramName
 * @returns {string}
 *
 * @example
 * functionName(input)
 * // → output
 */

export function compressString(str) {
  if (!str) return "";

  let result = "";
  let letter = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    } else {
      result += `${letter}${count > 1 ? count : ""}`;
      letter = str[i];
      count = 1;
    }
  }

  result += letter + (count > 1 ? count : "");

  return result;
}
