function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) return 0
    let max = 0
    let left = 0
    let memory = new Map()
    for (let i = 0; i < s.length; i++) {
        if (memory.has(s[i])) {
            while (memory.has(s[i])) {
                memory.delete(s[left])
                left++
            }
        }
        memory.set(s[i], i)
        max = max > memory.size ? max : memory.size
    }
    return max
};

console.log(lengthOfLongestSubstring("abada"));
