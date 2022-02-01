function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false
    let start: boolean = true
    for (let i = 1; i < arr.length; i++) {
        if (start) {
            if (arr[i] < arr[i - 1]) {
                if (i < 2) return false
                start = false
            }
            else if (arr[i] == arr[i - 1]) return false
        } else if (arr[i] >= arr[i - 1]) return false
    }
    return start ? false : true
};

console.log(validMountainArray(
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
