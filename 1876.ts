function countGoodSubstrings(s: string): number {
    const hashMap: Map<string, number> = new Map()
    let count = 0
    for (let i = 0; i < s.length; i++) {
        const charCount = hashMap.get(s[i])
        hashMap.set(s[i], charCount ? charCount + 1 : 1)
        if (i >= 2 && hashMap.size == 3) count++
        const charToBeRemoved = s[i - 2]
        hashMap.get(charToBeRemoved) > 1 ? hashMap.set(charToBeRemoved, hashMap.get(charToBeRemoved) - 1) : hashMap.delete(charToBeRemoved)
    }
    return count++
};

console.log(countGoodSubstrings('xxx'));
