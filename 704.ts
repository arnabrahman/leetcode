// function search(nums: number[], target: number): number {
//     let firstIndex = 0
//     let lastIndex = nums.length - 1
//     while (lastIndex >= firstIndex) {
//         let mid = Math.floor((firstIndex + lastIndex) / 2)
//         if (target == nums[mid])
//             return mid
//         else if (target < nums[mid]) {
//             lastIndex = mid - 1
//         }
//         else {
//             firstIndex = mid + 1;
//         }
//     }
//     return -1
// };

function search(nums: number[], target: number): number {
    return binarySearch(0, nums.length - 1)
    function binarySearch(l: number, r: number): number {
        while (l <= r) {
            const mid = Math.floor((l + r) / 2)
            if (nums[mid] == target) return mid
            else if (nums[mid] < target) return binarySearch(mid + 1, r)
            else return binarySearch(l, mid - 1)
        }
        return -1
    }
};
console.log(search([-1, 0, 3, 4, 9, 12], 12))