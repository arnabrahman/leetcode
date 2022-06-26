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

function preorder(root: Node | null): number[] {
    const result: number[] = []
    if (root == null) return result
    dfs(root)
    function dfs(root: Node) {
        if (root == null) return
        result.push(root.val)
        for (const children of root.children) {
            dfs(children)
        }
    }
    return result
};