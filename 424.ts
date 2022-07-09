function characterReplacement(s: string, k: number): number {
    let memory: Map<string, number> = new Map()
    let max = 0
    let left = 0
    let right = 0
    while (right < s.length) {
        memory.set(s[right], memory.get(s[right]) ? memory.get(s[right]) + 1 : 1)
        if (!(right - left + 1 - getMax() <= k)) {
            memory.get(s[left]) == 1 ? memory.delete(s[left]) : memory.set(s[left], memory.get(s[left]) - 1)
            left++
        }
        if (right - left + 1 > max) max = right - left + 1
        right++
    }
    return max
    function getMax() {
        let max = 0
        memory.forEach((val) => {
            if (val > max) max = val
        })
        return max
    }
};

console.log(characterReplacement('AABABBA', 1));
