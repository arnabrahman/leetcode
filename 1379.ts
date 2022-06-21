function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    if (cloned == null) return null
    if (original == target) return cloned
    const left = getTargetCopy(original.left, cloned.left, target)
    const right = getTargetCopy(original.right, cloned.right, target)
    if (left) return left
    if (right) return right
};