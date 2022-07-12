function findKthLargest(nums: number[], k: number): number {
    let heap: number[] = []
    for (const n of nums) {
        insert(n)
    }
   
    let i = 1
    while (i < k) {
        i++
        remove()
    }
    return heap[0]
    function insert(n: number) {
        heap.push(n)
        if (heap.length == 1) return
        let current = heap.length - 1
        while (current > 0 && heap[current] > heap[parent(current)]) {
            [heap[current], heap[parent(current)]] = [heap[parent(current)], heap[current]]
            current = parent(current)
        }
    }
    function remove() {
        heap[0] = heap[heap.length - 1]
        heap.pop()
        if (heap.length == 2) {
            if (heap[0] < heap[1]) [heap[0], heap[1]] = [heap[1], heap[0]]
            return
        }
        let parent = 0
        while (left(parent) < heap.length && (heap[left(parent)] > heap[parent] || (right(parent) < heap.length && heap[right(parent)] > heap[parent]))) {
            if (!heap[right(parent)] || heap[left(parent)] > heap[right(parent)]) {
                [heap[left(parent)], heap[parent]] = [heap[parent], heap[left(parent)]]
                parent = left(parent)
            } else {
                [heap[right(parent)], heap[parent]] = [heap[parent], heap[right(parent)]]
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


console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([-1, 2, 0], 2));
