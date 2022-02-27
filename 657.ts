function judgeCircle(moves: string): boolean {
    const position = [0, 0]
    for (const i of moves) {
        if (i == "U") {
            position[0] -= 1
            position[1] -= 1
        } else if (i == 'D') {
            position[0] += 1
            position[1] += 1
        }
        else if (i == 'R') {
            position[1] += 1
        } else {
            position[1] -= 1
        }
    }
    return position[0] == 0 && position[1] == 0
};

console.log(judgeCircle('LRL'))