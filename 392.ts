function isSubsequence(s: string, t: string): boolean {
    if (s.length == 0) return true
    let cursor = 0
    for (let i = 0; i < t.length; i++) {
        if (s[cursor] == t[i]) cursor++
        if (s.length == cursor) return true
    }
    return false

    let left_t = 0
    let right_t = t.length - 1
    let left_s = 0
    let right_s = s.length - 1
    while (left_t < right_t) {
        if (t[left_t] == s[left_s]) left_s++
        else left_t++
        if (t[right_t] == s[right_s]) right_s--
        else right_t--
    }
};

console.log(isSubsequence('', ''));
