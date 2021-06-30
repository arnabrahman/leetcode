function removeDuplicates(s: string): string {
    let stack: string[] = []
    stack.push(s[0])
    for (let i = 1; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] == s[i]) stack.pop()
        else stack.push(s[i])
    }
    let result = ''
    for (const character of stack) {
        result += character
    }
    return result
};

console.log(removeDuplicates("aadfa"))