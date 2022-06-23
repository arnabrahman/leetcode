function deepestLeavesSum(root: TreeNode | null): number {
    return dfs(root, 1, maxDepth(root), 0)

};

function maxDepth(root: TreeNode | null): number {
    if (root == null) return 0
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return 1 + Math.max(left, right)
};


function dfs(root: TreeNode | null, depth: number, max: number, total: number) {
    if (root == null) return 0
    if (depth == max) return total + root.val
    const left = dfs(root.left, depth + 1, max, total)
    const right = dfs(root.right, depth + 1, max, total)
    return left + right
}