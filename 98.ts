function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, 0)
    function dfs(root: TreeNode | null, val: number) {
        if (root == null) return null
        const left = dfs(root.left, val)
        let mid = true
        if (val) {
            mid = root.val > val
            val = root.val
        }
        const right = dfs(root.right, val)
        return mid && left && right
        // return (root.right ? root.val < root.right.val : true) && (root.left ? root.val > root.left.val : true) && left && right
    }

};