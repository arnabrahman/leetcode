function checkTree(root: TreeNode | null): boolean {
    return root.val == root.right?.val + root.left?.val
};