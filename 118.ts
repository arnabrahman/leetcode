function generate(numRows: number): number[][] {
    const res: [number[]] = [[1]]
    for (let i = 1; i < numRows; i++) {
        const temp: number[] = []
        temp.push(1)
        for (let j = 0; j < res[i - 1].length - 1; j++) {
            temp.push(res[i - 1][j] + res[i - 1][j + 1])
        }
        temp.push(1)
        res.push(temp)
    }
    return res
};

console.log(generate(1));
