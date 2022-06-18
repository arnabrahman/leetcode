function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root.left, root.right)
};

function isMirror(a: TreeNode | null, b: TreeNode | null) {
    if (a == null && b == null) return true
    return a?.val == b?.val && isMirror(a?.left, b?.right) && isMirror(a?.right, b?.left)
}