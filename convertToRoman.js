function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let newRomanNumber = "";

  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      console.log(`${num} >= ${numeral.value}`);
      newRomanNumber += numeral.symbol;
      console.log(newRomanNumber);
      console.log(`${num} - ${numeral.value}`);
      num -= numeral.value;
    }
    console.log(`${num} < ${numeral.value}`);
  }

  return newRomanNumber;
}

// function convertToRoman(num) {
//   const romanNumerals = [
//     { value: 1000, symbol: "M" },
//     { value: 900, symbol: "CM" },
//     { value: 500, symbol: "D" },
//     { value: 400, symbol: "CD" },
//     { value: 100, symbol: "C" },
//     { value: 90, symbol: "XC" },
//     { value: 50, symbol: "L" },
//     { value: 40, symbol: "XL" },
//     { value: 10, symbol: "X" },
//     { value: 9, symbol: "IX" },
//     { value: 5, symbol: "V" },
//     { value: 4, symbol: "IV" },
//     { value: 1, symbol: "I" },
//   ];

//   let newRomanNumber = "";

//   for (const numeral of romanNumerals) {
//     while (num >= numeral.value) {
//       newRomanNumber += numeral.symbol;
//       num -= numeral.value;
//     }
//   }

//   return newRomanNumber;
// }


convertToRoman(36);
