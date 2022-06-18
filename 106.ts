function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length == 0 || inorder.length == 0) return null
    const root = new TreeNode(postorder[postorder.length - 1])
    const mid = inorder.findIndex((num) => num == postorder[postorder.length - 1])
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, postorder.length - 1))
    return root
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
