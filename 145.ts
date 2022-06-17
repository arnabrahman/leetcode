function postorderTraversal(root: TreeNode | null): number[] {
    return dfs(root, [])
    // if (root == null) return []
    // const stack: TreeNode[] = [root]
    // const result: number[] = []
    // let curr = root
    // while (stack.length > 0) {
    //     while (curr.left) {
    //         curr = curr.left
    //         stack.push(curr)
    //     }
    //     curr = curr.right
    //     if (curr) {
    //         stack.push(curr)
    //     } else {
    //         result.push(stack.pop().val)
    //         curr = stack[stack.length - 1].right
    //     }
    // }
    // return result
};

function dfs(root: TreeNode | null, result: number[]) {
    if (root == null) return result
    dfs(root.left, result)
    dfs(root.right, result)
    result.push(root.val)
    return result
}