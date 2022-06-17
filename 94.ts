function inorderTraversal(root: TreeNode | null): number[] {
    let stack: TreeNode[] = root ? [root] : []
    let curr = root
    let result: number[] = []
    while (stack.length > 0) {
        while (curr && curr.left) {
            curr = curr.left
            stack.push(curr)
        }
        curr = stack.pop()
        result.push(curr.val)
        curr = curr.right
        if (curr) stack.push(curr)
    }
    return result
};

function dfs(root: TreeNode | null, result: number[]) {
    if (root == null) return result
    dfs(root.left, result)
    result.push(root.val)
    dfs(root.right, result)
    return result
}