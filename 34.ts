/**
 *  After finding target first search for target at left and then search for target at right
 * @param nums 
 * @param target 
 * @returns 
 */
function searchRange(nums: number[], target: number): number[] {
    let result: number[] = []
    result = binarySearch(0, nums.length - 1)
    if (result[0] == -1) return result
    const second = binarySearch(result[1] + 1, nums.length - 1)[1]
    result[1] = second > result[1] ? second : result[1]

    function binarySearch(l: number, r: number): number[] {
        let left = -1
        let right = -1
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            if (nums[mid] == target) {
                if (left == -1) left = mid
                else if (mid < left) left = mid

                if (right == -1) right = mid
                else if (mid > right) right = mid

                if (result.length == 0) r = mid - 1
                else l = mid + 1
            }
            else if (nums[mid] < target) l = mid + 1
            else r = mid - 1
        }
        return [left, right]
    }
    return result
};


console.log(searchRange([5, 5, 7, 7, 8, 8, 10], 10));
