/**
 * 📝 Disemvowel Trolls
 *
 *  Trolls are attacking your comment section!

    A common way to deal with this situation is to remove all of the vowels from the trolls' 
    comments, neutralizing the threat.

    Your task is to write a function that takes a string and return a new string with 
    all vowels removed.

    For example, the string "This website is for losers LOL!" would become 
    "Ths wbst s fr lsrs LL!".

    Note: for this kata y isn't considered a vowel.
    *
 * @param {string} str
 * @returns {string}
 *
 */

// export function disemvowel(str) {
//   const vowels = ["a", "e", "o", "u", "i"];

//   return str
//     .split("")
//     .filter((symbol) => !vowels.includes(symbol.toLowerCase()))
//     .join("");
// }

export function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
