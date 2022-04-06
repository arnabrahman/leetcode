function merge(intervals: number[][]): number[][] {
    const newIntervals = []
    intervals = intervals.sort(((a, b) => {
        return a[0] - b[0]
    }))
    let prev = [...intervals[0]], j = 1;
    while (j < intervals.length) {
        if (inBetween(prev[0], prev[1], intervals[j][0]) && inBetween(prev[0], prev[1], intervals[j][1])) {
        }
        else if (inBetween(prev[0], prev[1], intervals[j][0])) {
            prev = [prev[0], intervals[j][1]]
        } else {
            newIntervals.push([...prev])
            prev = [...intervals[j]]
        }
        j++
    }
    newIntervals.push([...prev])
    return newIntervals
};

function inBetween(start: number, end: number, needle: number) {
    return start <= needle && needle <= end;
}


console.log(merge([[1, 3], [4, 6], [8, 10], [9, 10], [11, 12], [40, 50]]));
// console.log(merge([[1, 3], [2, 6], [8, 10], [9, 18], [11, 12], [13, 15]]));
