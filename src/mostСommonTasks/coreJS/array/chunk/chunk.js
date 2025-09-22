/**
 * 📝 Chunk (разбиение массива)
 *
 * Напиши функцию chunk(arr, size), которая разбивает массив на подмассивы фиксированного размера.
 *
 * @param {}
 * @returns {}
 *
 * @example
 *  chunk([1, 2, 3, 4, 5], 2);
 *   // [[1, 2], [3, 4], [5]]
 *
 *   chunk([1, 2, 3, 4, 5, 6, 7], 3);
 *   // [[1, 2, 3], [4, 5, 6], [7]]
 *
 */

// export function chunk(arr, size) {
//   const copyArr = [...arr];
//   const result = [];

//   while (copyArr.length > 0) {
//     result.push(copyArr.splice(0, size));
//   }

//   return result;
// }

///////////////////
// export function chunk(arr, size) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }

//   return result;
// }

export function chunk(arr, size) {
  return arr.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);
}

const result = chunk([1, 2, 3, 4, 5], 2);

console.log(result);
