function intersection(nums1: number[], nums2: number[]): number[] {
    let primary = new Set(nums1)
    let secondary = new Set(nums2)
    let result: number[] = []
    if (primary.size < secondary.size) [primary, secondary] = [secondary, primary]
    for (let num of primary) {
        if (secondary.has(num)) result.push(num)
    }
    return result
};

console.log(intersection([1], [1, 2]))