function twoSum(nums: number[], target: number): number[] {
    const result: number[] = []
    const hashMap = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (hashMap.has(diff)) {
            result.push(hashMap.get(diff), i)
            break
        }
        else {
            hashMap.set(nums[i], i)
        }
    }
    return result
};

console.log(twoSum([2, 7, 5, 15], 22))