function searchInsert(nums: number[], target: number): number {
    let i = 0;
    let j = nums.length - 1

    while (i <= j) {
        let mid = Math.floor((i + j) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            j = mid - 1
            if (nums[j] < target) return mid
        } else {
            i = mid + 1
            if (nums[i] > target) return i
        }
    }
    return i
};

console.log(searchInsert([1, 3, 5, 6], 7));
