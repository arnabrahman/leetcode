function topKFrequent(words: string[], k: number): string[] {
    type freqWord = {
        count: number,
        s: string
    }
    let heap: freqWord[] = []
    let hash: Map<string, number> = new Map()
    const res: string[] = []

    for (let i = 0; i < words.length; i++) {
        const count = hash.get(words[i]) ?? 0
        hash.set(words[i], count + 1)
    }

    hash.forEach((val, key) => {
        insert({
            count: val,
            s: key
        })
    })

    function parent(i: number) {
        return Math.floor((i - 1) / 2);
    }
    for (let i = 0; i < k; i++) {
        res.push(heap[0].s)
        remove()

    }
    function insert(freqWord: freqWord) {
        heap.push(freqWord)
        if (heap.length == 1) return
        let current = heap.length - 1

        while (current != 0 && heap[current].count >= heap[parent(current)].count) {
            if (heap[current].count > heap[parent(current)].count) [heap[parent(current)], heap[current]] = [heap[current], heap[parent(current)]]
            else if (heap[current].s < heap[parent(current)].s) [heap[current], heap[parent(current)]] = [heap[parent(current)], heap[current]]
            current = parent(current)
        }
    }
    function remove() {
        heap[0] = heap[heap.length - 1]
        heap.pop()
        let parent = 0
        if (heap.length == 2) {
            const max = getMaxIndex(0, 1)
            if (max == 0) return
            const temp = heap[max]
            heap[max] = heap[parent]
            heap[parent] = temp
        }
        else {
            let left = heap.length > parent * 2 + 1 ? parent * 2 + 1 : 0
            let right = heap.length > parent * 2 + 2 ? parent * 2 + 2 : 0

            while (left && left + 1 != heap.length && ((heap[parent].count <= heap[left].count) || (right && heap[parent].count <= heap[right].count))) {

                if (!right) {
                    [heap[left], heap[parent]] = [heap[parent], heap[left]]
                    parent = left
                } else {
                    const max = getMaxIndex(left, right)
                    const max2 = getMaxIndex(parent, max)
                    if (max2 == parent) break
                    const temp = heap[max]
                    heap[max] = heap[parent]
                    heap[parent] = temp
                    parent = max

                    left = heap.length > parent * 2 + 1 ? parent * 2 + 1 : 0
                    right = heap.length > parent * 2 + 2 ? parent * 2 + 2 : 0
                }
            }
        }
    }

    function getMaxIndex(l: number, r: number): number {
        if (heap[l].count == heap[r].count) return heap[l].s < heap[r].s ? l : r
        return heap[l].count > heap[r].count ? l : r
    }
    return res
};
