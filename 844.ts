function backspaceCompare(s: string, t: string): boolean {
    let a = ''
    let b = ''
    let backSpaceCount_s = 0
    let backSpaceCount_t = 0
    const len = s.length > t.length ? s.length - 1 : t.length - 1
    for (let i = len; i >= 0; i--) {
        if (i < s.length) {
            if (s[i] == '#') backSpaceCount_s++
            else {
                if (backSpaceCount_s == 0) a = s[i] + a
                else backSpaceCount_s--
            }
        }
        if (i < t.length) {
            if (t[i] == '#') backSpaceCount_t++
            else {
                if (backSpaceCount_t == 0) b = t[i] + b
                else backSpaceCount_t--
            }
        }
    }
    return a == b
};

console.log(backspaceCompare('ab##c#', 'c#d#'));
