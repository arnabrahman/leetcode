function decodeString(s: string): string {
    let res = ''
    let stack: string[] = []
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '[') {
            let digit = ''
            while (s.charCodeAt(i - 1) >= 48 && s.charCodeAt(i - 1) <= 57) {
                digit = s[i - 1] + digit
                i--
            }
            let temp = ''
            let lastElement = stack.pop()
            while (lastElement != ']') {
                temp += lastElement
                lastElement = stack.pop()
            }
            const a = temp
            for (let j = 1; j < parseInt(digit); j++) {
                temp += a
            }
            stack.push(temp)
        }
        else {
            stack.push(s[i])
        }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        res += stack[i]
    }
    return res
};

console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));
