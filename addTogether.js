function addTogether(x, y) {
  const [first, second] = arguments;

  if (typeof first === "number") {
    if (typeof second === "number") {
      return first + second;
    }

    if (arguments.length === 1) {
      return (second) => addTogether(first, second);
    }
  }
}

addTogether(2, 3);

addTogether(2)(3);

const sumTwoAnd = addTogether(2);

sumTwoAnd(5);