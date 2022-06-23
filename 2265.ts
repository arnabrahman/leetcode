function averageOfSubtree(root: TreeNode | null): number {
    return calculateSum(root, 0, 0, 0)[2]
};

function calculateSum(root: TreeNode | null, count: number, sum: number, total: number) {
    if (root == null) return [0, 0, total]
    const left = calculateSum(root.left, count + 1, sum + root.left?.val, total)
    const right = calculateSum(root.right, count + 1, sum + root.right?.val, total)
    const nodeCount = left[0] + right[0] + 1
    const nodeSum = root.val + left[1] + right[1]
    const average = Math.floor(nodeSum / nodeCount)
    if (average == root.val) total++
    return [nodeCount, nodeSum, total + left[2] + right[2]]
}