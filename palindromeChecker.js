function palindrome(str) {
  const regExp = /[\W_]/g;
  const newCleanString = str.toLowerCase().replace(regExp, "");
  const reversedString = newCleanString.split("").reverse().join("");

  return newCleanString === reversedString;
}

palindrome("eye");
palindrome("_eye");
palindrome("not a palindrome");
palindrome("My age is 0, 0 si ega ym.");
palindrome("nope");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /- :) 0-0");
