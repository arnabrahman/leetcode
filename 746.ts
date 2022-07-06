function minCostClimbingStairs(cost: number[]): number {
    let cursor = -1
    let minCost = 0
    while (cursor != cost.length) {
        const first = cursor + 1
        let firstStep = 0
        let firstCost = 0
        const second = cursor + 2
        let secondStep = 0
        let secondCost = 0
        if (cost[first + 1] < cost[first + 2]) {
            firstStep = 1
            firstCost = cost[first + 1] + cost[first]
        } else {
            firstStep = 2
            firstCost = cost[first + 2] + cost[first]
        }
        if (cost[second + 1] < cost[second + 2]) {
            secondStep = 1
            secondCost = cost[second + 1] + cost[second]
        } else {
            secondStep = 2
            secondCost = cost[second + 2] + cost[second]
        }
        if (firstCost < secondCost) {
            cursor += (first + firstStep)
            minCost += firstCost
        } else {
            cursor += (second + secondStep)
            minCost += secondCost
        }
    }
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
