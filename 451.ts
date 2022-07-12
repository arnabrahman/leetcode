function frequencySort(s: string): string {
    type freq = {
        ch: string,
        count: number
    }
    const hash: Map<string, number> = new Map()
    let res = ''
    for (const ch of s) {
        hash.set(ch, hash.has(ch) ? hash.get(ch) + 1 : 1)
    }
    let heap: freq[] = []
    hash.forEach((val, key) => insert({
        ch: key,
        count: val
    }))

    while (heap.length > 0) {
        for (let j = 0; j < heap[0].count; j++) {
            res += heap[0].ch
        }
        remove()
    }
    return res
    function insert(freq: freq) {
        heap.push(freq)
        if (heap.length == 1) return
        let current = heap.length - 1
        while (current > 0 && heap[current].count > heap[parent(current)].count) {
            [heap[current], heap[parent(current)]] = [heap[parent(current)], heap[current]]
            current = parent(current)
        }
    }

    function remove() {
        heap[0] = heap[heap.length - 1]
        heap.pop()
        if (heap.length == 2) {
            if (heap[0].count < heap[1].count) [heap[0], heap[1]] = [heap[1], heap[0]]
            return
        }
        let parent = 0

        while (left(parent) < heap.length && (heap[left(parent)].count > heap[parent].count || (heap[right(parent)] && heap[right(parent)].count > heap[parent].count))) {
            if (!heap[right(parent)] || heap[left(parent)].count > heap[right(parent)].count) {
                [heap[parent], heap[left(parent)]] = [heap[left(parent)], heap[parent]]
                parent = left(parent)
            } else {
                [heap[parent], heap[right(parent)]] = [heap[right(parent)], heap[parent]]
                parent = right(parent)
            }

        }
    }

    function parent(i: number) {
        return Math.floor((i - 1) / 2)
    }
    function left(i: number) {
        return 2 * i + 1
    }
    function right(i: number) {
        return 2 * i + 2
    }
};

console.log(frequencySort('abaccadeeefaafcc'));
