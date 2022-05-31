function findDisappearedNumbers(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != nums[nums[i] - 1]) {
            const temp = nums[i]
            nums[i] = nums[temp - 1]
            nums[temp - 1] = temp
        }
    }
    const final = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == i + 1) continue
        final.push(i + 1)
    }
    return final
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
