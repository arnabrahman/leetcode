function getMinDistance(nums: number[], target: number, start: number): number {
    let min = 1000
    for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
        if (target == nums[i] && Math.abs(i - start) < min) {
            min = Math.abs(i - start)
        } if ((i != j) && target == nums[j] && Math.abs(j - start) < min) {
            min = Math.abs(j - start)
        }
    }
    return min
};

console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9))