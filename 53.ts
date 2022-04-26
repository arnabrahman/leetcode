function maxSubArray(nums: number[]): number {
    let max = nums[0]
    let max_till_now = max
    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], nums[i] + max)
        max_till_now = Math.max(max_till_now, max)
    }
    return max_till_now
};

console.log(maxSubArray([-2, 1]));
