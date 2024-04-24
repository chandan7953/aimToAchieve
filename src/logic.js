function calculateProfit(amount, rate) {
  return (amount * rate) / 100;
}

function logic(amount, rate, target) {
  amount = parseInt(amount);
  rate = parseInt(rate);
  target = parseInt(target);

  console.log("Target calulation start with amount ", amount);
  let i = 1;

  let arr = [];

  while (amount <= target) {
    let principle = amount;
    let profit = calculateProfit(amount, rate);
    profit = parseInt(profit);
    if (profit == 0) {
      profit = 1;
    }
    amount += profit;
    amount = parseInt(amount);
    let obj = {
      id: i,
      principle,
      profit,
      amount,
    };
    arr.push(obj);
    i++;
  }
  return arr;
}

export default logic;
