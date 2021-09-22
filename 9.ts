function isPalindrome(x: number): boolean {
    if (x < 0) return false
    let temp = x
    let reverse = 0
    while (x > 0) {
        const remainder = x % 10
        x = Math.floor(x / 10)
        reverse = reverse * 10 + remainder
    }
    return reverse == temp
};
console.log(isPalindrome(1212));
