function inorderTraversal(root: TreeNode | null): number[] {
    return dfs(root, [])
};

function dfs(root: TreeNode | null, result: number[]) {
    if (root == null) return result
    dfs(root.left, result)
    result.push(root.val)
    dfs(root.right, result)
    return result
}