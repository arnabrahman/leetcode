function findLucky(arr: number[]): number {
    let hashMap = new Map();
    for (const num of arr) {
        let count: number = hashMap.get(num) ?? 0
        hashMap.set(num, ++count)
    }
    let max = -1;
    hashMap.forEach((value, key) => {
        if (value == key && value > max) max = key
    })
    return max
};

console.log(findLucky([2, 3,1]))