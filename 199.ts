function rightSideView(root: TreeNode | null): number[] {
    if (root == null) return []
    enum child {
        LEFT = 'l',
        RIGHT = 'r',
        ROOT = 'root'
    }
    const children: Array<child> = [child.ROOT]
    const queue: Array<TreeNode> = []
    const result: number[] = []
    let queueCursor = 0
    queue.push(root)
    while (queueCursor < queue.length) {
        const until = queue.length
        const start = queueCursor
        for (let i = start; i < until; i++) {
            const hasChildren = children.length > 1
            if (queue[i].right) {
                queue.push(queue[i].right)
                if (!hasChildren) children.push(child.RIGHT)
                else children.push(children[i])
            }
            if (queue[i].left) {
                queue.push(queue[i].left)
                if (!hasChildren) children.push(child.LEFT)
                else children.push(children[i])
            }
            queueCursor++
        }
        let firstLeft: number = 0
        for (let i = start; i < queueCursor; i++) {
            if (children[i] == child.ROOT) result.push(queue[i].val)
            else if (children[i] == child.RIGHT) {
                result.push(queue[i].val)
                firstLeft = 0
                break
            }
            else if (firstLeft == 0) firstLeft = queue[i].val
        }
        if (firstLeft != 0) result.push(firstLeft)
    }
    return result
};
console.log(rightSideView([1, 2, 3, null, 5, 5]));
