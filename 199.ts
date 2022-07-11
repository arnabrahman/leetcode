function rightSideView(root: TreeNode | null): number[] {
    const res: number[] = []
    const stack: TreeNode[] = []
    let cursor = 0
    stack.push(root)
    while (cursor < stack.length) {
        const from = cursor
        const until = stack.length
        res.push(stack[cursor].val)
        for (let i = from; i <= until; i++) {
            if (stack[i].left) stack.push(stack[i].left)
            if (stack[i].right) stack.push(stack[i].right)
            cursor++
        }
    }
    return res
};