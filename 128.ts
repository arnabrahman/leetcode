function longestConsecutive(nums: number[]): number {
    const memory = new Map()
    let start: number = null, end: number = null
    for (const n of nums) {
        memory.set(n, 1)
        const before = n - 1
        const after = n + 1
        console.log("num: ", memory, before, n, after);

        if (memory.has(before) && memory.has(after)) {
            if (start == null) {
                start = before
                end = after
            } else {
                if (before <= start && before < end) {
                    end = after
                } else if (before < start && start <= after && after < end) {
                    start = before
                    end = after
                }
            }
        }
        else if (memory.has(before)) {
            if (start == null) {
                start = before
                end = n
            } else {
                if (before <= start && before < end && n > end) {
                    end = n
                } else if (before < start && start <= n && n < end) {
                    start = before
                    end = n
                }
            }
        }
        else if (memory.has(after)) {
            if (start == null) {
                start = n
                end = after
            } else {
                if (n <= start && n < end && after > end) {
                    end = after
                } else if (n < start && start <= after && after < end) {
                    start = n
                    end = after
                }
            }
        }
        console.log(start, end);
    }

    return 1
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
