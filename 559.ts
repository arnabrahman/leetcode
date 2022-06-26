
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    if (root == null) return 0
    let biggest = 0
    for (const children of root.children) {
        const temp = maxDepth(children)
        if (biggest < temp) biggest = temp
    }
    return 1 + biggest
};