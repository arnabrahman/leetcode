function searchMatrix(matrix: number[][], target: number): boolean {
    let row = -1;
    let m = matrix.length
    let n = matrix[0].length
    for (let i = 0; i < m; i++) {
        if (target == matrix[i][n - 1]) return true
        else if (target > matrix[i][n - 1]) continue
        row = i;
        break;
    }
    if (row == -1) return false
    return binarySearch(0, n - 1, matrix[row], target)
};

function binarySearch(low: number, high: number, nums: number[], target: number) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] == target) return true
        else if (target < nums[mid]) {
            return binarySearch(0, mid - 1, nums, target)
        } else {
            return binarySearch(mid + 1, high, nums, target)
        }
    }
    return false
}

// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 35));

console.log(searchMatrix([[1, 3, 5]], 4));
