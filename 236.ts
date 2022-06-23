function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null) return null
    if (root.val == p.val || root.val == q.val) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (left == null) return right
    if (right == null) return left
    if (left && right) return root
};
