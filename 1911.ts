function maxAlternatingSum(nums: number[]): number {
    let first = 0;
    let second = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const temp = Math.max(second, nums[i], second - nums[i], (second + nums[i] - nums[i - 1]))
        first = second
        second = temp
    }
    return second
};

console.log(maxAlternatingSum([6,6]));
