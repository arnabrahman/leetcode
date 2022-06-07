function rob(nums: number[]): number {
    // if (nums.length == 1) return nums[0]
    // let first = nums[nums.length - 2]
    // let second = nums[nums.length - 1]
    // let third = 0
    // let max = second > first ? second : first;
    // for (let i = nums.length - 3; i >= 0; i--) {
    //     const temp = first
    //     first = Math.max(nums[i] + second, nums[i] + third)
    //     third = second
    //     second = temp
    //     max = second > first ? second : first;
    // }
    // return max
    let rob1 = 0, rob2 = 0;
    for (let i = 0; i < nums.length; i++) {
        const temp = Math.max(nums[i] + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};

console.log(rob([2, 1, 1, 2]));
