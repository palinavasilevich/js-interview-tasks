/**
 * 📝 Получение значения из объекта по пути
 *
 * Напишите функцию getObjectByPath(obj, path), которая принимает объект obj и строку path,
 * представляющую путь к значению в объекте.
 *  - Если путь существует, функция должна возвращать соответствующее значение.
 *  - Если путь не существует, функция должна возвращать undefined.
 *  - Путь передается в виде строки, разделенной точками (.).
 *
 * @param {, string} obj, path
 * @returns {string}
 *
 * @example
 *  Input 1: { a: { b: { c: "d" } } }, "a.b.c"
 *  Output 1: "d"
 *
 *  Input 2: { x: { y: { z: 42 } } }, "x.y.a"
 *  Output 2: undefined
 *
 *  Input 3: { a: { b: { c: "d" } } }, "a.b"
 *  Output 3: { c: "d" }
 */

// function getObjectByPath(obj, path) {
//   const keys = path.split(".");

//   function traversal(item, index) {
//     if (item === undefined || item === null) {
//       return undefined;
//     }

//     const key = keys[index];
//     const value = item[key];

//     if (index === keys.length - 1) {
//       return value;
//     }

//     return traversal(value, index + 1);
//   }

//   return traversal(obj, 0);
// }

// export function getObjectByPath(obj, path) {
//   const paths = path.split(".");
//   let currentObj = obj;

//   for (const path of paths) {
//     if (!(path in currentObj)) return undefined;

//     currentObj = currentObj[path];
//   }

//   return currentObj;
// }

function getObjectByPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, obj);
}

const result1 = getObjectByPath({ a: { b: { c: "d" } } }, "a.b.c");
const result2 = getObjectByPath({ x: { y: { z: 42 } } }, "x.y.a");
const result3 = getObjectByPath({ a: { b: { c: "d" } } }, "a.b");

console.log(result1);
console.log(result2);
console.log(result3);
