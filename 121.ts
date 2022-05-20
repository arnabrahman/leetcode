function maxProfit(prices: number[]): number {
    let bought = prices[0]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < bought) {
            bought = prices[i]
            continue
        } else {
            maxProfit = maxProfit > (prices[i] - bought) ? maxProfit : (prices[i] - bought)
        }
    }
    return maxProfit
};

console.log(maxProfit([7, 6, 4, 3, 1]));
