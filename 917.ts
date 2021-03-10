function reverseOnlyLetters(S: string): string {
    let res: string = ""
    let saved_index: Array<number> = []
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== "-") continue
        saved_index.push(i)
    }
    let index = 0;
    for (let i = S.length - 1; i >= 0; i--) {
        if (S[i] === "-") continue
        if (i == saved_index[index]) {
            res += "-"
            index++
            continue;
        } else {
            res += S[i]
        }
    }
    return res
};
reverseOnlyLetters("a-ad")