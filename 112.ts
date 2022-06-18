function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return dfs(root, targetSum, 0)
};


function dfs(root: TreeNode | null, targetSum: number, sum: number) {
    if (root == null) return false
    sum += root.val
    if (root.left == null && root.right == null) return targetSum == sum
    return dfs(root.left, targetSum, sum) || dfs(root.right, targetSum, sum)

}

