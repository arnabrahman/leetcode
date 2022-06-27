function findMiddleIndex(nums: number[]): number {
    const sum = nums.reduce((a, b) => a + b, 0)
    let leftSum = 0
    let righSum = 0
    for (let i = 0; i < nums.length; i++) {
        righSum = sum - leftSum - nums[i]
        if (leftSum == righSum) return i
        leftSum += nums[i]
    }
    return -1
};