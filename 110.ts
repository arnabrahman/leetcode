function isBalanced(root: TreeNode | null): boolean {
    if (root == null) return null
    return getHeight(root)[0]
};


function getHeight(root: TreeNode | null): [boolean, number] {
    if (root == null) return [true, 0]
    let left = getHeight(root.left)
    let right = getHeight(root.right)
    let balanced = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1)
    return [balanced, 1 + Math.max(left[1], right[1])]
}