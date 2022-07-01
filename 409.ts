/**
 * Sum all pairs + take one from the remaining set
 */

function longestPalindrome(s: string): number {
    const memory = new Map()
    let count = 0
    for (const ch of s) {
        if (memory.has(ch)) {
            count++
            memory.delete(ch)
        }
        else {
            memory.set(ch, 1)
        }
    }
    return (count * 2) + (memory.size > 0 ? 1 : 0)
};

console.log(longestPalindrome("aaaAQNcjhafkjUPhafaYAQZLHDYnbgfaaaaabcbcccwzABWqYUafaPNQL"));

