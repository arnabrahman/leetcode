/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(m+n)
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const m = matrix.length
    const n = matrix[0].length
    let row = Array(m).fill(0)
    let col = Array(n).fill(0)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] != 0) continue;
            row[i] = 1;
            col[j] = 1
        }
    }
    
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] == 1 || col[j] == 1) matrix[i][j] = 0
        }
    }
    
};


console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
