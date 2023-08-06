function dropElements(arr, func) {
  const newArray = [...arr];

  while (newArray.length > 0 && !func(newArray[0])) {
    newArray.shift();
  }

  return newArray;
}

const testArray = [1, 2, 3, 4];

const droppedElement = dropElements(testArray, function (n) {
  return n >= 3;
});

console.log({
  testArray,
  droppedElement,
});
