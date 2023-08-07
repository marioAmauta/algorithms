function checkCashRegister(price, cash, cid) {
  const moneyUnits = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1,
  };

  let change = cash * 100 - price * 100;

  let cidTotal = cid.reduce((acc, el) => acc + el[1], 0) * 100;

  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    let answer = [];
    cid = cid.reverse();

    for (let el of cid) {
      let holder = [el[0], 0];
      el[1] = el[1] * 100;

      while (change >= moneyUnits[el[0]] && el[1] > 0) {
        change -= moneyUnits[el[0]];
        el[1] -= moneyUnits[el[0]];
        holder[1] += moneyUnits[el[0]] / 100;
      }
      if (holder[1] > 0) {
        answer.push(holder);
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: answer };
  }
}

const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

checkCashRegister(19.5, 20, cid);
