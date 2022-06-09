function twoSum(numbers: number[], target: number): number[] {
    let l = 0, r = numbers.length - 1
    while (l < r) {
        const sum = numbers[l] + numbers[r]
        if (sum == target) return [l + 1, r + 1]
        else if (sum > target) r--
        else l++
    }
};

function binarySearch(arr: number[], l: number, r: number, search: number) {
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] == search) return mid
        else if (search < arr[mid]) return binarySearch(arr, l, mid - 1, search)
        else return binarySearch(arr, mid + 1, r, search)
    }
    return -1
}

console.log(twoSum([0, 0, 3, 4], 0));
