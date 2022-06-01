function findDuplicate(nums: number[]): number {
    let slow = nums[0]
    let fast = nums[nums[0]]
    while (slow != fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }
    let anotherSlow = 0
    while (slow != anotherSlow) {
        slow = nums[slow]
        anotherSlow = nums[anotherSlow]
    }
    return slow

};

console.log(findDuplicate([3, 2, 1, 4, 3]));
