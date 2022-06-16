function reverse(x: number): number {
    let result = 0
    let count = 1
    const isNegative = x < 0
    x *= isNegative ? -1 : 1
    let quotient = Math.floor(x / 10)
    while (quotient) {
        count++
        quotient = Math.floor(quotient / 10)
    }
    while (count > 0) {
        const remainder = x % 10
        result += (Math.pow(10, count - 1) * remainder)
        x = Math.floor(x / 10)
        count--
    }
    return result * (isNegative ? -1 : 1)
};

console.log(reverse(-1234));
