function isIsomorphic(s: string, t: string): boolean {
    let first = new Map()
    let second = new Map()

    for (let i = 0; i < s.length; i++) {
        first.has(s[i]) ? first.set(s[i], 1 + first.get(s[i])) : first.set(s[i], 1)
        second.has(t[i]) ? second.set(t[i], 1 + second.get(t[i])) : second.set(t[i], 1)
    }
    if (first.size != second.size) return false

    for (let i = 0; i < s.length; i++) {
        if (first.get(s[i]) != second.get(t[i])) return false
        if ((s[i] == s[i - 1] && t[i] != t[i - 1]) || (s[i] != s[i - 1] && t[i] == t[i - 1])) return false
    }
    return true
};
console.log(isIsomorphic("fap", "bcd"))