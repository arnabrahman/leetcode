function firstUniqChar(s: string): number {
    let savedIndex = {};
    let stingMap = {};
    let min = null;
    for (let i = 0; i < s.length; i++) {
        if (stingMap[s[i]]) stingMap[s[i]]++;
        else {
            stingMap[s[i]] = 1;
            savedIndex[s[i]] = i;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (stingMap[s[i]] !== 1) continue;
        if (min == null || min > savedIndex[s[i]]) min = savedIndex[s[i]];
    }
    if (min === null) return -1;
    return min;
};