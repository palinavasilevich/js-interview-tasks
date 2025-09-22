/**
 * 📝 Анаграммы
 *
 * Напиши функцию isAnagram(str1, str2), которая возвращает true, если
 * две строки являются анаграммами.
 * Анаграмма — это слово, составленное из тех же букв, но в другом порядке.
 *
 * @param {string, string} str1, str2
 * @returns {boolean}
 *
 * @example
 *  isAnagram("listen", "silent")      // true
 *  isAnagram("rail safety", "fairy tales") // true
 *  isAnagram("hello", "world")        // false
 */

// export function isAnagram(str1, str2) {
//   const sortedStr = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z0-9]/g, "")
//       .split("")
//       .sort()
//       .join("");

//   return sortedStr(str1) === sortedStr(str2);
// }

export function isAnagram(str1, str2) {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");

  const a = normalize(str1);
  const b = normalize(str2);

  if (a.length !== b.length) return false;

  const count = {};

  for (const ch of a) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (const ch of b) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
}

isAnagram("listen", "silent"); // true
isAnagram("rail safety", "fairy tales"); // true
isAnagram("hello", "world"); // false
