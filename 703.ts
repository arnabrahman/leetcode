class KthLargest {
    heap: number[] = []
    k: number = 0
    constructor(k: number, nums: number[]) {
        for (const n of nums) {
            this.insert(n)
        }
        this.k = k
    }
    insert(val: number) {
        this.heap.push(val)
        if (this.heap.length == 1) return
        let current = this.heap.length - 1
        while (current > 0 && this.heap[current] > this.heap[this.parent(current)]) {
            [this.heap[current], this.heap[this.parent(current)]] = [this.heap[this.parent(current)], this.heap[current]]
            current = this.parent(current)
        }
    }
    add(val: number): number {
        this.insert(val)
        const temp: number[] = []
        for (let i = 1; i < this.k; i++) {
            temp.push(this.heap[0])
            this.remove()
        }
       
        
        const res = this.heap[0]
        for (const n of temp) {
            this.insert(n)
        }
        console.log(this.heap);
        return res
    }

    remove() {
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        if (this.heap.length == 2) {
            if (this.heap[0] < this.heap[1]) [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
            return
        }
        let parent = 0
        while (this.left(parent) < this.heap.length && (this.heap[this.left(parent)] > this.heap[parent] || (this.right(parent) < this.heap.length && this.heap[this.right(parent)] > this.heap[parent]))) {
            if (!this.heap[this.right(parent)] || this.heap[this.left(parent)] > this.heap[this.right(parent)]) {
                [this.heap[this.left(parent)], this.heap[parent]] = [this.heap[parent], this.heap[this.left(parent)]]
                parent = this.left(parent)
            } else {
                [this.heap[this.right(parent)], this.heap[parent]] = [this.heap[parent], this.heap[this.right(parent)]]
                parent = this.right(parent)
            }
        }
    }

    parent(i: number) {
        return Math.floor((i - 1) / 2)
    }
    left(i: number) {
        return 2 * i + 1
    }
    right(i: number) {
        return 2 * i + 2
    }
}


// let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3));   // return 4
// console.log(kthLargest.add(5));   // return 5
// console.log(kthLargest.add(10));  // return 5
// console.log(kthLargest.add(9));   // return 8
// console.log(kthLargest.add(4));   // return 8

let kthLargest = new KthLargest(2, [0]);
console.log(kthLargest.add(-1));   // return 4
console.log(kthLargest.add(1));   // return 5
console.log(kthLargest.add(-2));  // return 5
console.log(kthLargest.add(-4));   // return 8
console.log(kthLargest.add(3));   // return 8