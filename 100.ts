function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return postOrderTraversal(p, q)
};

function postOrderTraversal(p: TreeNode, q: TreeNode) {
    if (p == null && q == null) return true
    else if (p && q) {
        const left = postOrderTraversal(p.left, q.left)
        const right = postOrderTraversal(p.right, q.right)
        return left && right && p.val == q.val
    } else {
        return false
    }
}