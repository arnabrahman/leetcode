function isValidBST(root: TreeNode | null): boolean {
    let previousVal = null
    let result = true
    dfs(root)
    return result
    function dfs(root: TreeNode | null,) {
        if (root == null || !result) return
        dfs(root.left)
        if (previousVal == null) previousVal = root.val
        else if (root.val <= previousVal) result = false
        else previousVal = root.val
        dfs(root.right)
    }
};