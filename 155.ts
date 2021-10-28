class MinStack {
    private stack: number[];
    private min: number;
    constructor() {
        this.stack = []
        this.min = null
    }

    push(val: number): void {
        this.stack.push(val)
        this.findAndSaveMin()
    }

    pop(): void {
        const element = this.stack.pop()
        if (element == this.min) this.min = null
        this.findAndSaveMin()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.min
    }

    findAndSaveMin() {
        for (let i of this.stack) {
            if (this.min == null) this.min = i
            else if (i < this.min) this.min = i
        }
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
; // return -3
minStack.pop();
console.log(minStack.top());
;    // return 0
console.log(minStack.getMin());
; // return -2