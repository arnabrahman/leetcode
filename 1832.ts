function checkIfPangram(sentence: string): boolean {
    let alphabet = new Map();
    for (let character of sentence) {
        alphabet.set(character, 1);
        if (alphabet.size === 26) return true
    }
    return false;
};

console.log(checkIfPangram("sfgafafr"))