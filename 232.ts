class MyQueue {
    stack: number[];
    cursor: number
    constructor() {
        this.stack = []
        this.cursor = 0
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        const n = this.stack[this.cursor]
        this.cursor++
        return n
    }

    peek(): number {
        return this.stack[this.cursor]
    }

    empty(): boolean {
        return this.cursor == this.stack.length
    }
}

var obj = new MyQueue()
obj.push(1)
obj.push(2)
var param_2 = obj.pop()
obj.pop()
var param_3 = obj.peek()

var param_4 = obj.empty()

console.log(param_2, param_3, param_4);
