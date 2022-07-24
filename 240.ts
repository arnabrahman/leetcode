function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length
    const n = matrix[0].length

    // If we start from top-right or bottom-left and then decrease the search area, we will come up to a solution
    let row = 0
    let col = n - 1

    while ((row >= 0 && row < m) && (col >= 0 && col < n)) {
        if (matrix[row][col] < target) row++
        else if (matrix[row][col] > target) col--
        else return true
    }
    return false
};

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 19));
