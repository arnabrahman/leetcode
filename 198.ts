function rob(nums: number[]): number {
    if (nums.length == 1) return nums[0]
    let first = nums[nums.length - 2]
    let second = nums[nums.length - 1]
    let third = 0
    let max = second > first ? second : first;
    for (let i = nums.length - 3; i >= 0; i--) {
        const temp = first
        first = Math.max(nums[i] + second, nums[i] + third)
        third = second
        second = temp
        max = second > first ? second : first;
    }
    return max
};

console.log(rob([1, 1, 3, 1]));
