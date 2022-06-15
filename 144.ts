function preorderTraversal(root: TreeNode | null): number[] {
    return dfs(root, [])
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
