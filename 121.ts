// function maxProfit(prices: number[]): number {
//     let bought = prices[0]
//     let maxProfit = 0
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < bought) {
//             bought = prices[i]
//             continue
//         } else {
//             maxProfit = maxProfit > (prices[i] - bought) ? maxProfit : (prices[i] - bought)
//         }
//     }
//     return maxProfit
// };


function maxProfit(prices: number[]): number {
    let max = 0;
    let bought = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < bought) bought = prices[i]
        max = prices[i] - bought > max ? prices[i] - bought : max
    }
    return max
}

console.log(maxProfit([7, 80, 4, 3, 1]));