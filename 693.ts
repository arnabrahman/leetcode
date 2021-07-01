function hasAlternatingBits(n: number): boolean {
    let remainder = null
    while (n > 0) {
        remainder = n % 2
        n = Math.floor(n / 2)
        if (remainder == n % 2) return false
    }
    return true
};

console.log(hasAlternatingBits(3))