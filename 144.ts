function preorderTraversal(root: TreeNode | null): number[] {
    if (root == null) return []
    const stack: TreeNode[] = [root]
    const result: number[] = [root.val]
    let curr = root
    while (stack.length > 0) {
        while (curr?.left) {
            curr = curr.left
            result.push(curr.val)
            stack.push(curr)
        }
        curr = stack.pop()
        curr = curr.right
        if (curr) {
            result.push(curr.val)
            stack.push(curr)
        }
    }
    return result
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
