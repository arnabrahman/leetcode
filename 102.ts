function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return []
    const res: number[][] = []
    const queue: TreeNode[] = []
    queue.push(root)
    let queueCursor = 0
    while (queueCursor < queue.length) {
        const until = queue.length
        const start = queueCursor
        const temp: number[] = []
        for (let i = start; i < until; i++) {
            temp.push(queue[i].val)
            if (queue[i].left) queue.push(queue[i].left)
            if (queue[i].right) queue.push(queue[i].right)
            queueCursor++
        }
        res.push(temp)
    }
    return res
};