function findAnagrams(s: string, p: string): number[] {
    let hash: Map<string, number> = new Map()
    let temp: Map<string, number> = new Map()
    const res: number[] = []
    for (const ch of p) {
        hash.set(ch, hash.has(ch) ? hash.get(ch) + 1 : 1)
    }
    let i = 0;
    let j = 0
    while (j < s.length) {
        temp.set(s[j], temp.get(s[j]) ? temp.get(s[j]) + 1 : 1)
        if (j - i == p.length - 1) {
            if (isHashSame(hash, temp)) res.push(i)
            temp.get(s[i]) == 1 ? temp.delete(s[i]) : temp.set(s[i], (temp.get(s[i]) - 1))
            i++
        }
        j++
    }
    return res
};

function isHashSame(a: Map<string, number>, b: Map<string, number>) {
    if (a.size != b.size) return false
    for (const [key] of b) {
        if (!a.has(key) || a.get(key) != b.get(key)) return false
    }
    return true
}

console.log(findAnagrams('cbaebabacd', 'abcd'));
