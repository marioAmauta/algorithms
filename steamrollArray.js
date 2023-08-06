function steamrollArray(arr) {
  const flattenedArray = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      flattenedArray.push(...steamrollArray(arr[i]))
    } else {
      flattenedArray.push(arr[i])
    }
  }

  return flattenedArray
}

// function steamrollArray(arr) {
//   const flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }

const exampleArray = [1, [2], [3, [[4]]]];

const flat = steamrollArray(exampleArray);

console.log({
  exampleArray,
  flat,
});
