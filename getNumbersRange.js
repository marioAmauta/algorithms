function getNumbersRange(minNumber, maxNumber) {
  if (minNumber > maxNumber || minNumber === maxNumber) {
    console.log('min number can not be greater or equal than max number')
    return null
  }
  
  return Array(minNumber, maxNumber).fill(0).map((_, index) => index + minNumber)
}

const range = getNumbersRange(1, 5)
const range2 = getNumbersRange(7, 5)

console.log({ range })
console.log({ range2 })