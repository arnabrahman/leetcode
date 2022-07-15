function maxAreaOfIsland(grid: number[][]): number {
    let max = 0
    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] != 1) continue
            grid[i][j] = 2
            const queue: number[][] = []
            queue.push([i, j])
            let cursor = 0
            while (cursor < queue.length) {
                let from = cursor
                const until = queue.length
                for (let k = from; k < until; k++) {
                    let row = queue[k][0]
                    let col = queue[k][1]
                    if (row - 1 >= 0 && grid[row - 1][col] == 1) {
                        grid[row - 1][col] = 2
                        queue.push([row - 1, col])
                    }
                    if (row + 1 < m && grid[row + 1][col] == 1) {
                        grid[row + 1][col] = 2
                        queue.push([row + 1, col])
                    }
                    if (col + 1 < n && grid[row][col + 1] == 1) {
                        grid[row][col + 1] = 2
                        queue.push([row, col + 1])
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] == 1) {
                        grid[row][col - 1] = 2
                        queue.push([row, col - 1])
                    }
                    cursor++
                }
            }
            if (queue.length > max) max = queue.length
        }
    }
    return max
};

console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));

console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
