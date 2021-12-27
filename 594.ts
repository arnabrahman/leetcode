function findLHS(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let hash = new Map()
    for (let i of nums) {
        let content = hash.get(i)
        content ? hash.set(i, ++content) : hash.set(i, 1)
    }
    let min = null, max = null, length = 0

    hash.forEach((value, key, map) => {
        if (min == null) min = parseInt(key)
        else if (max == null) max = parseInt(key)
        else[min, max] = [max, parseInt(key)]
        if (min != null && max != null && Math.abs(min - max) == 1) {
            if (max < min) [max, min] = [min, max]
            if (length < hash.get(min) + hash.get(max)) length = hash.get(min) + hash.get(max)
        }
    })

    return length

};

console.log(findLHS([-1, 0, -1, 0, -1, 0, -1]));
