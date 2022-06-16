function preorderTraversal(root: TreeNode | null): number[] {
    const stack: TreeNode[] = [root]
    const res: number[] = []
    // while (root) {
    //     stack.push(root)
    //     res.push(root.val)
    //     root = root.left
    // }
    while (stack.length > 0) {
        const lastNode = stack.pop()
        if (lastNode.right) {
            stack.push(root.right)
            res.push(root.right.val)
        }
    }
    return res
};

/**
 *  Recursive solution
 * @param root 
 * @param res 
 * @returns 
 */
function dfs(root: TreeNode | null, res: number[]) {
    if (root == null) return res
    res.push(root.val)
    dfs(root.left, res)
    dfs(root.right, res)
    return res
}
