function maxNumberOfBalloons(text: string): number {
    let hashOfBallon = {
        'b': 1,
        'a': 1,
        'l': 2,
        'o': 2,
        'n': 1
    }
    let hashOfGivenString = {}
    for (let character of text) {
        if (!hashOfBallon[character]) continue
        if (hashOfGivenString[character]) hashOfGivenString[character] += 1
        else hashOfGivenString[character] = 1
    }
    let occurence = null
    for (let character in hashOfBallon) {
        if (!hashOfGivenString[character]) return 0
        const occ = Math.floor(hashOfGivenString[character] / hashOfBallon[character])
        if (occurence == null) occurence = occ
        else if (occurence > occ) occurence = occ
    }
    return occurence
};


console.log(maxNumberOfBalloons('ballon'));
