function numIslands(grid: string[][]): number {
    const m = grid.length
    const n = grid[0].length
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] != '1') continue
            count++
            bfs(i, j)
        }
    };
    function bfs(r: number, c: number) {
        grid[r][c] = '2'
        const queue: number[][] = []
        let cursor = 0
        queue.push([r, c])
        while (cursor < queue.length) {
            const from = cursor
            const until = queue.length
            for (let i = from; i < until; i++) {
                r = queue[i][0]
                c = queue[i][1]
                if (r - 1 >= 0 && grid[r - 1][c] == '1') {
                    queue.push([r - 1, c])
                    grid[r - 1][c] = '2'
                }
                if (r + 1 < m && grid[r + 1][c] == '1') {
                    queue.push([r + 1, c])
                    grid[r + 1][c] = '2'
                }
                if (c + 1 < n && grid[r][c + 1] == '1') {
                    queue.push([r, c + 1])
                    grid[r][c + 1] = '2'
                }
                if (c - 1 >= 0 && grid[r][c - 1] == '1') {
                    queue.push([r, c - 1])
                    grid[r][c - 1] = '2'
                }
                cursor++
            }
        }
    }
    return count
};

console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]));
console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]));

