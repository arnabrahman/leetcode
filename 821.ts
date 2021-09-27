function shortestToChar(s: string, c: string): number[] {
    let postion = []
    let distance = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) postion.push(i)
    }
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (Math.abs(i - postion[counter]) > Math.abs(i - postion[counter + 1])) counter++
        distance.push(Math.abs(i - postion[counter]))
    }
    return distance
};


console.log(shortestToChar("loveleetcode", "e"));
