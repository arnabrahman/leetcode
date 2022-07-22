function isValid(s: string): boolean {
    let hash = new Map()
    hash.set(')', '(')
    hash.set('}', '{')
    hash.set(']', '[')

    const stack: string[] = []
    let i = s.length - 1
    while (i >= 0) {
        if (hash.has(s[i])) stack.push(s[i])
        else if (hash.get(stack.pop()) != s[i]) return false
        i--
    }
    return stack.length == 0
};

console.log(isValid(')'));
