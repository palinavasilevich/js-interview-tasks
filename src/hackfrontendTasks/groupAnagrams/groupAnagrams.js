// ============================== //
// Группировка анаграмм
// ============================== //

// Напишите функцию groupAnagrams(arr), которая принимает массив строк arr и группирует анаграммы вместе. Условия:
// Анаграмма — это слово или фраза, образованные путем перестановки букв другого слова или
// фразы (например, "tea" => "eat").

// Примеры:
// Input 1: ["ab", "ba", "abc", "bca"]
// Output 1: [["abc","bca"],["ab","ba"]]
// Input 2: ["listen", "silent", "enlist"]
// Output 2: [["listen","silent","enlist"]]

// function groupAnagrams(arr) {
//   const result = [];
//   const map = {};

//   for (let word of arr) {
//     const sortedWord = word.split("").sort().join("");
//     map[sortedWord] = map[sortedWord] ? [...map[sortedWord], word] : [word];
//   }

//   for (let item of Object.values(map)) {
//     result.push(item);
//   }
//   return result;
// }

function groupAnagrams(arr) {
  const map = new Map();

  for (const word of arr) {
    // 1. Создаём ключ: сортируем буквы слова
    const key = word.split("").sort().join("");

    // 2. Если ключ ещё не существует, создаём новую группу
    if (!map.has(key)) {
      map.set(key, []);
    }

    // 3. Добавляем слово в соответствующую группу
    map.get(key).push(word);
  }

  // 4. Возвращаем массив групп
  return Array.from(map.values());
}

// === Примеры ===
console.log(groupAnagrams(["ab", "ba", "abc", "bca"]));
// [["ab","ba"],["abc","bca"]]

console.log(groupAnagrams(["listen", "silent", "enlist"]));
// [["listen","silent","enlist"]]
