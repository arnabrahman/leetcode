function maxCoins(piles: number[]): number {
    piles.sort((a, b) => a - b)
    let sum: number = 0
    for (let i = piles.length / 3; i < piles.length; i = i + 2) {
        sum += piles[i]
    };
    return sum
}

console.log(maxCoins([-89, 8, 7, 5, 4, 3]))
