function canConstruct(ransomNote: string, magazine: string): boolean {
    let hash: Map<string, number> = new Map()
    for (const ch of magazine) {
        hash.set(ch, hash.has(ch) ? hash.get(ch) + 1 : 1)
    }
    for (const ch of ransomNote) {
        if (!hash.has(ch)) return false
        hash.get(ch) == 1 ? hash.delete(ch) : hash.set(ch, hash.get(ch) - 1)
    }
    return true
};

console.log(canConstruct('a', 'b'));
