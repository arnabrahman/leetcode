function areOccurrencesEqual(s: string): boolean {
    let charMap = new Map()
    let value = null
    let count = 0;
    let isGood = true
    for (const character of s) {
        value = charMap.get(character)
        if (value) charMap.set(character, ++value)
        else charMap.set(character, 1)
    }
    charMap.forEach((value, key) => {
        if (count == 0) count = value
        else if (count != value) isGood = false
    })
    return isGood
};

console.log(areOccurrencesEqual('aab'));
