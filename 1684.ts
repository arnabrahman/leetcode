function countConsistentStrings(allowed: string, words: string[]): number {
    let count = words.length
    let alphas = {}
    for (const character of allowed) {
        alphas[character] = true
    }
    for (const word of words) {
        for (const character of word) {
            if (!alphas[character]) {
                count--
                break
            }
        }
    }
    return count
};

console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]))