function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const m = mat.length
    const n = mat[0].length
    if (r * c != m * n) return mat
    const res: number[][] = new Array(r)
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(c).fill(0);
    }
    let row_num = 0
    let col_num = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[row_num][col_num] = mat[i][j]
            col_num++
            if (col_num == c) {
                row_num++
                col_num = 0
            }
        }
    }
    return res
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
console.log(matrixReshape([[1, 2]], 1, 1));
