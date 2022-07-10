function lastStoneWeight(stones: number[]): number {
    stones = stones.sort((a, b) => b - a)
    while (stones.length > 1) {
        let x = stones[0]
        remove()
        let y = stones[0]
        remove()
        if (x != y) insert(Math.abs(x - y))
    }
    function remove() {
        stones[0] = stones[stones.length - 1]
        stones.pop()
        let parent = 0
        let left = stones.length > parent * 2 + 1 ? parent * 2 + 1 : 0
        let right = stones.length > parent * 2 + 2 ? parent * 2 + 2 : 0
        if (!left) return
        while ((left && stones[parent] < stones[left]) || (right && stones[parent] < stones[right])) {
            if (!right || stones[left] > stones[right]) {
                [stones[left], stones[parent]] = [stones[parent], stones[left]]
                parent = left
            }
            else {
                [stones[right], stones[parent]] = [stones[parent], stones[right]]
                parent = right
            }
            left = stones.length > parent * 2 + 1 ? parent * 2 + 1 : 0
            if (!left) break
            right = stones.length > parent * 2 + 2 ? parent * 2 + 2 : 0
        }
    }
    function insert(n: number) {
        stones.push(n)
        let current = stones.length - 1
        while (stones[current] > stones[Math.floor(current / 2)]) {
            [stones[Math.floor(current / 2)], stones[current]] = [stones[current], stones[Math.floor(current / 2)]]
            current = Math.floor(current / 2)
        }
    }
    return stones.length == 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([8, 8, 6, 3, 7, 4, 7]));
