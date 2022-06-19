function greatestLetter(s: string): string {
    let memory = new Map()
    let max: number = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            memory.set(s.charCodeAt(i), 1)
            if (memory.has(s.charCodeAt(i) + 32) && memory.has(s.charCodeAt(i))) {
                max = max > s.charCodeAt(i) ? max : s.charCodeAt(i)
            }
        } else {
            memory.set(s.charCodeAt(i), 1)
            if (memory.has(s.charCodeAt(i)) && memory.has(s.charCodeAt(i) - 32)) {
                max = max > (s.charCodeAt(i) - 32) ? max : (s.charCodeAt(i) - 32)
            }
        }
    };
    return max ? String.fromCharCode(max) : ""
}

console.log(greatestLetter("aaabB"));
