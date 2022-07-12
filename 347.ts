function topKFrequent(nums: number[], k: number): number[] {
    type freqElement = {
        count: number,
        n: number
    }
    let hash: Map<number, number> = new Map()
    let heap: freqElement[] = []
    for (const n of nums) {
        hash.set(n, hash.has(n) ? hash.get(n) + 1 : 1)
    }
    hash.forEach((val, key) => {
        insert({
            count: val,
            n: key
        })
    })
    const res: number[] = []
    for (let i = 0; i < k; i++) {
        res.push(heap[0].n)
        remove()
    }

    function insert(freqElement: freqElement) {
        heap.push(freqElement)
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
            if (heap[0].count < heap[1].count) {
                [heap[0], heap[1]] = [heap[1], heap[0]]
            }
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

    function left(i: number) {
        return 2 * i + 1
    }
    function right(i: number) {
        return 2 * i + 2
    }
    function parent(i: number) {
        return Math.floor((i - 1) / 2)
    }
    return res
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 2, 2, 2, 2, 4], 2));
