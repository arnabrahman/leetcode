class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)
        if (this.minStack.length == 0 || this.minStack[this.minStack.length - 1] >= val) this.minStack.push(val)
    }

    pop(): void {
        const element = this.stack.pop()
        if (this.minStack[this.minStack.length - 1] == element) this.minStack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin());
; // return -3
minStack.pop();
console.log(minStack.top());
;    // return 0
console.log(minStack.getMin());
; // return -2