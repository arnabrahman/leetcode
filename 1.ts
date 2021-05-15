function twoSum(nums: number[], target: number): number[] {
    let sortedArray = [...nums].sort((a, b) => a - b)
    let length = sortedArray.length
    let left = 0;
    let right = length - 1
    while (length > 0) {
        if (sortedArray[left] + sortedArray[right] == target) break
        sortedArray[left] + sortedArray[right] > target ? right-- : left++
        length--
    }
    let results = []
    for (let i = 0; i < nums.length; i++) {
        if (sortedArray[left] == nums[i]) results.push(i)
        else if (sortedArray[right] == nums[i]) results.push(i)
    }
    return results
};

console.log(twoSum([2, 7, 4, 3, 11, 8], 9))