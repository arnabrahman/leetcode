function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true
    if (root && subRoot) {
        if (root.val == subRoot.val && isSame(root, subRoot)) return true
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    }
    return false
}

function isSame(i: TreeNode | null, j: TreeNode | null) {
    if (!i && !j) return true
    else if (i && j) {
        return i.val == j.val && isSame(i.left, j.left) && isSame(i.right, j.right)
    } else {
        return false
    }
}