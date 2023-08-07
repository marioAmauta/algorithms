function telephoneCheck(str) {
  const regExp = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  return regExp.test(str);
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("800-692-7753");
telephoneCheck("8oo-six427676;laskdjf");
telephoneCheck("5555555");
