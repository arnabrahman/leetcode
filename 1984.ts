function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => b - a)
    let min = nums[0] - nums[k - 1];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i + k - 1] < min) min = nums[i] - nums[i + k - 1]
    }
    return min
};

console.log(minimumDifference([9, 4, 1, 8, 7], 2));
