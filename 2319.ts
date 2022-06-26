function checkXMatrix(grid: number[][]): boolean {
    const len = grid.length
    for (let i = 0; i < len; i++) {
        if (grid[i][i] == 0 || grid[i][len - 1 - i] == 0) return false
        for (let j = 0; j < len; j++) {
            if (i == j || j == len - 1 - i) continue
            if (grid[i][j] !== 0) return false
        }
    }
    return true
};

console.log(checkXMatrix([[2, 0, 7], [0, 0, 0], [6, 0, 5]]));
