function uniquePaths(m: number, n: number): number {
    let grid: number[][] = Array(m)
    for (let i = 0; i < m; i++) {
        grid[i] = Array(n).fill(0)
    }
    grid[m - 1][n - 1] = 1
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i == m - 1 && j == n - 1) continue
            grid[i][j] = (i + 1 == m ? 0 : grid[i + 1][j]) + (j + 1 == n ? 0 : grid[i][j + 1])
        }
    }
    return grid[0][0]
};

console.log(uniquePaths(3, 2));
