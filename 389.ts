function findTheDifference(s: string, t: string): string {
    let modified_string = 0, first_string = 0
    let len_of_t = t.length
    for (let i = 0; i < len_of_t; i++) {
        modified_string += t.charCodeAt(i)
        if (i == len_of_t - 1) continue
        first_string += s.charCodeAt(i)
    }
    return String.fromCharCode(modified_string - first_string);
};