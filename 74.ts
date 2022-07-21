function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length
    const n = matrix[0].length

    return binarySearch(0, (m * n) - 1)
    function binarySearch(l: number, r: number) {
        let mid = Math.floor((l + r) / 2)

        while (l <= r) {
            const row = Math.floor((mid / n))
            const col = mid - (n * row)
            const val = matrix[row][col]

            if (val == target) return true
            else if (val > target) return binarySearch(l, mid - 1)
            else return binarySearch(mid + 1, r)
        }
        return false
    }
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 21));
console.log(searchMatrix([[1, 3, 5]], 1));
