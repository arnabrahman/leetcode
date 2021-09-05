function minSteps(s: string, t: string): number {
    let targetString = {}
    let givenString = {}
    let operation = 0
    for (let i = 0; i < s.length; i++) {
        if (targetString[s[i]]) targetString[s[i]] += 1
        else targetString[s[i]] = 1
        if (givenString[t[i]]) givenString[t[i]] += 1
        else givenString[t[i]] = 1
    }

    for (let i in targetString) {
        if (hasThisCharacter(givenString, i)) {
            if (givenString[i] < targetString[i]) operation += (targetString[i] - givenString[i])
        } else {
            operation += targetString[i]
        }
    }
    return operation
    let i = 0, j = 0
    while (j < t.length) {
        if (!hasThisCharacter(givenString, t[j])) {
            j++;
            continue
        } else if (!hasThisCharacter(targetString, t[j])) {
            if (hasThisCharacter(givenString, s[i])) {
                givenString = decreseCounter(givenString, s[i])
                i++
                continue
            }
            else {
                operation++
                targetString = decreseCounter(targetString, s[i])
            }
        }
        else {
            targetString = decreseCounter(targetString, t[j])
        }
        j++
        i++
    }

    return operation
};

function hasThisCharacter(hash: Object, character: string) {
    return hash[character] !== undefined
}

function decreseCounter(hash: Object, character: string) {
    hash[character] -= 1
    if (hash[character] == 0) delete hash[character]
    return hash
}

console.log(minSteps('xxxz', 'aaxa'))