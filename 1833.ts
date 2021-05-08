function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  let barsThatBoyCanBuy: number = 0;
  for (let index = 0; index < costs.length; index++) {
    if (costs[index] <= coins) {
      barsThatBoyCanBuy++;
      coins -= costs[index];
    } else {
      break;
    }
  }
  return barsThatBoyCanBuy;
}

console.log(maxIceCream([10, 2, 10, 10, 10, 10, 8, 2, 7, 8], 25));
