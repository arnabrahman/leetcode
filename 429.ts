/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
    if (root == null) return []
    const queue: Node[] = [root]
    const result: number[][] = []
    let cursor = 0
    while (cursor < queue.length) {
        const first = cursor
        const until = queue.length
        const temp = []
        for (let i = first; i < until; i++) {
            for (const children of queue[i].children) {
                queue.push(children)
            }
            temp.push(queue[i].val)
            cursor++
        }
        result.push(temp)
    }
    return result
};