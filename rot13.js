function rot13(str) {
  const input = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
  const output = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const regExp = /\W/g;

  let decodedString = "";

  for (let i = 0; i < str.length; i++) {
    if (regExp.test(str[i])) {
      decodedString += str[i];
    } else {
      const index = input.indexOf(str[i]);
      decodedString += output[index];
    }
  }

  return decodedString;
}

rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("SERR CVMMN!"); // FREE PIZZA!
