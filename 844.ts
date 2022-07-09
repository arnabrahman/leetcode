function backspaceCompare(s: string, t: string): boolean {
    let a = ''
    let b = ''
    let backSpaceCount = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '#') backSpaceCount++
        else {
            if (backSpaceCount == 0) a = s[i] + a
            else backSpaceCount--
        }
    }
    backSpaceCount = 0
    for (let i = t.length - 1; i >= 0; i--) {
        if (t[i] == '#') backSpaceCount++
        else {
            if (backSpaceCount == 0) b = t[i] + b
            else backSpaceCount--
        }
    }
    return a==b
};

console.log(backspaceCompare('ab##c#', 'c#d#'));
