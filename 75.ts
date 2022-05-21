/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let red = 0
    let white = 0
    let blue = 0
    for (const digit of nums) {
        if (digit == 0) red++
        else if (digit == 1) white++
        else blue++
    }
    for (let i = 0; i < nums.length; i++) {
        if (red != 0) {
            nums[i] = 0
            red--
            continue
        } else if (white != 0) {
            nums[i] = 1
            white--
            continue
        }
        else if (blue != 0) {
            nums[i] = 2
            blue--
            continue
        }
    }
    console.log(nums);
}

sortColors([2, 0, 2, 1, 1, 0, 2, 2])
