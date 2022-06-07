function rob2(nums: number[]): number {
    if (nums.length == 1) return nums[0]
    return Math.max(findMax(nums, 0, nums.length - 1), findMax(nums, 1, nums.length))
};

function findMax(nums: number[], first: number, last: number) {
    let rob1 = 0, rob2 = 0;
    for (let i = first; i < last; i++) {
        const temp = Math.max(nums[i] + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
}

console.log(rob2([1, 2, 3]));