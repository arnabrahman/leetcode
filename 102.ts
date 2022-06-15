function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = []
    const queue: TreeNode[] = []
    let queueCursor = 0
    queue.push(root)
    while (queueCursor != queue.length - 1) {
        const until = queue.length
        const start = queueCursor
        const temp: number[] = []
        for (let i = start; i < until; i++) {
            temp.push(queue[i].val)
            queueCursor++
            if (queue[i].left) queue.push(queue[i].left)
            if (queue[i].right) queue.push(queue[i].right)
        }
        res.push(temp)
    }
    return res
};

