// Looping approach
// function smallestCommons(arr) {
//   const [min, max] = arr.sort((a, b) => a - b);
//   console.log({ min, max });

//   const numbersDivisors = max - min + 1;
//   console.log({ numbersDivisors });

//   let upperBound = 1;
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//     console.log({ upperBound });
//   }

//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     let divisorCount = 0;

//     for (let i = min; i <= max; i++) {
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }

//     if (divisorCount === numbersDivisors) {
//       return multiple;
//     }
//   }

// }

// ES6 looping approach
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);

  const upperBound = range.reduce((acc, el) => acc * el);

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    const divisible = range.every((value) => multiple % value === 0);

    if (divisible) {
      return multiple;
    }
  }
}

const smc = smallestCommons([1, 5]);
console.log({ smc });
