function bstToGst(root: TreeNode | null): TreeNode | null {
    if (root == null) return root
    var sum = 0
    function transform(root: TreeNode | null) {
        if (root == null) return root
        transform(root.right)
        const temp = root.val
        root.val += sum
        sum += temp
        transform(root.left)
    };
    transform(root)
    return root
};