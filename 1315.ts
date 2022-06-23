function sumEvenGrandparent(root: TreeNode | null): number {
    return calculateSum(root, 0)
};

function calculateSum(root: TreeNode | null, total: number) {
    if (root == null) return 0
    if (root.val % 2 == 0) {
        const left = calculateSum(root.left, total)
        const right = calculateSum(root.right, total)
        const leftNode = root.left
        const rightNode = root.right
        if (leftNode?.left) total += leftNode.left.val
        if (leftNode?.right) total += leftNode.right.val
        if (rightNode?.left) total += rightNode.left.val
        if (rightNode?.right) total += rightNode.right.val
        return total + left + right
    } else {
        return calculateSum(root.left, total) + calculateSum(root.right, total)
    }
}