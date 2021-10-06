function reversePrefix(word: string, ch: string): string {
    let hasFound = false
    let reversedWord = ''
    for (let i = 0; i < word.length; i++) {
        if (!hasFound) reversedWord = word[i] + reversedWord
        else reversedWord += word[i]
        if (word[i] === ch) hasFound = true
    }
    if (hasFound) return reversedWord
    return word
};

console.log(reversePrefix('abcdefd', 'x'));
