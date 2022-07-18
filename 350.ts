function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let l = 0, r = 0
    const res: number[] = []
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] == nums2[r]) {
            res.push(nums1[l])
            l++
            r++
        } else if (nums1[l] > nums2[r]) {
            r++
        }else{
            l++
        }
    }
    // let hash: Map<number, number> = new Map()
    // const res: number[] = []
    // for (const n of nums1) {
    //     hash.set(n, hash.has(n) ? hash.get(n) + 1 : 1)
    // }
    // for (const n of nums2) {
    //     if (!hash.has(n)) continue
    //     res.push(n)
    //     hash.get(n) == 1 ? hash.delete(n) : hash.set(n, hash.get(n) - 1)
    // }
    return res
};

console.log(intersect([2, 1, 2, 2, 1, 3, 4], [2, 1, 2, 3, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
