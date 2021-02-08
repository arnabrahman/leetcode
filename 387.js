function firstUniqChar(s) {
    var savedIndex = {};
    var stingMap = {};
    var min = null;
    for (var i = 0; i < s.length; i++) {
        if (stingMap[s[i]])
            stingMap[s[i]]++;
        else {
            stingMap[s[i]] = 1;
            savedIndex[s[i]] = i;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (stingMap[s[i]] !== 1)
            continue;
        if (min == null || min > savedIndex[s[i]])
            min = savedIndex[s[i]];
    }
    if (min === null)
        return -1;
    return min;
}
;
