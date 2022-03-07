function arrayRankTransform(arr: number[]): number[] {
    let indexArray = []
    for (let i = 1; i <= arr.length; i++) {
        indexArray
    }

    const hash = new Map()
    let unsortedArray = [...arr]
    arr.sort((a, b) => a - b)
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (!hash.has(arr[i])) hash.set(arr[i], count++)
    }
    unsortedArray = unsortedArray.map((val, key) => {
        return hash.get(val)
    })
    return unsortedArray
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
