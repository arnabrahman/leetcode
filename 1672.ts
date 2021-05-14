function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (let customer of accounts) {
    let wealth = 0;
    for (let wealthInBank of customer) {
      wealth += wealthInBank;
    }
    max = max > wealth ? max : wealth;
  }
  return max;
}

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
