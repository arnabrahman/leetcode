function topKFrequent(words: string[], k: number): string[] {
    type freqWord = {
        count: number,
        s: string
    }
    let heap: freqWord[] = []
    let hash: Map<string, number> = new Map()

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

    function insert(freqWord: freqWord) {
        heap.push(freqWord)
        if (heap.length == 1) return
        let current = heap.length - 1

        while (current && heap[current].count >= heap[Math.floor(current / 2)].count) {
            if (heap[current].count == heap[Math.floor(current / 2)].count) {
                if (heap[current].s < heap[Math.floor(current / 2)].s) [heap[current], heap[Math.floor(current / 2)]] = [heap[Math.floor(current / 2)], heap[current]]
                break
            } else {
                [heap[current], heap[Math.floor(current / 2)]] = [heap[Math.floor(current / 2)], heap[current]]
            }
            current = Math.floor(current / 2)
        }
    }
    function pop() {
        const poppedVal = heap[0]
        remove()
        return poppedVal
    }
    function remove() {
        heap[0] = heap[heap.length - 1]
        heap.pop()
        let parent = 0
        let left = heap.length > parent * 2 + 1 ? parent * 2 + 1 : 0
        let right = heap.length > parent * 2 + 2 ? parent * 2 + 2 : 0
        while (left && ((heap[parent].count <= heap[left].count) || (right && heap[parent].count <= heap[right].count))) {
            if (!right || heap[left] > heap[right]) {
                [heap[left], heap[parent]] = [heap[parent], heap[left]]
                parent = left
            }
            else {
                [heap[right], heap[parent]] = [heap[parent], heap[right]]
                parent = right
            }
            left = heap.length > parent * 2 + 1 ? parent * 2 + 1 : 0
            right = heap.length > parent * 2 + 2 ? parent * 2 + 2 : 0
        }
    }
    console.log(heap);
    return []
};

// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
