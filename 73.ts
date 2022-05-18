/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(m+n)
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length
    const n = matrix[0].length
    let row_zero = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] != 0) continue
            i == 0 ? row_zero = 0 : matrix[i][0] = 0
            matrix[0][j] = 0
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }
    if (matrix[0][0] == 0) {
        for (let i = 1; i < m; i++) {
            matrix[i][0] = 0
        }
    }
    if (row_zero == 0) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0
        }
    }
};


console.log(setZeroes([[1, 2, 0, 1, 5], [2, 3, 2, 3, 2], [0, 4, 1, 8, 7], [3, 3, 0, 1, 2]]));
