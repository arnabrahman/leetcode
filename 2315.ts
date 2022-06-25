function countAsterisks(s: string): number {
    let start = false
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (!start && s[i] === "*") count++
        else if (!start && s[i] === "|") start = true
        else if (start && s[i] === "|") start = false
    }
    return count
};

console.log(countAsterisks("||||*"));
