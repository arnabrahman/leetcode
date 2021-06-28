function sortArrayByParity(nums: number[]): number[] {
    let i = 0
    let j = nums.length - 1
    while (i < j) {
        let iIsEven = nums[i] % 2 == 0
        let jIsEven = nums[j] % 2 == 0
        if (iIsEven) {
            i++
        } else if (!iIsEven && jIsEven) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        } else if (!iIsEven && !jIsEven) {
            j--
        }
    }
    return nums
};

console.log(sortArrayByParity([2, 9, 2, 2, 9]))