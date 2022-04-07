function lastStoneWeight(stones: number[]): number {
    stones = stones.sort((a, b) => b - a)
    let len = stones.length
    while (len > 1) {
        let y = stones[0]
        let x = stones[1]
        if (x == y) {
            stones[0] = 0
            stones[1] = 0;
            len -= 2
        } else {
            stones[0] = y - x
            stones[1] = 0;
            len--
        }
        stones = stones.sort((a, b) => b - a)
    }
    return stones[0];
};

console.log(lastStoneWeight([2, 2]));
