function missingNumber(nums: number[]): number {
    let sum = 0;
    for (const num of nums) {
        sum += num
    }
    return Math.abs(sum - ((nums.length * (nums.length + 1)) / 2))
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([1]));
