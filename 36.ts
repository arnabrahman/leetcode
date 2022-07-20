function isValidSudoku(board: string[][]): boolean {
    let row: Map<string, number>[] = []
    let col: Map<string, number>[] = []
    let row_num = 0
    let col_num = 0
    while (row_num < 9 && col_num < 9) {
        let hash: Map<string, number> = new Map()
        for (let i = row_num; i < row_num + 3; i++) {
            for (let j = col_num; j < col_num + 3; j++) {
                if (!row[i]) row.push(new Map())
                if (!col[j]) col.push(new Map())
                if (board[i][j] == '.') continue
                if (hash.has(board[i][j])) return false
                else hash.set(board[i][j], 1)
                if (row[i].has(board[i][j])) return false
                else row[i].set(board[i][j], 1)
                if (col[j].has(board[i][j])) return false
                else col[j].set(board[i][j], 1)
            }
        }
        col_num += 3
        if (col_num == 9) {
            row_num += 3
            col_num = 0
        }
    }
    return true
};


console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));
