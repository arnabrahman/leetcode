/**
 *   LCS of Binary tree
 *
 */


// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     if (root == null) return null
//     if ((root.left?.val == p.val && root.right?.val == q.val) || (root.left?.val == q.val && root.right?.val == p.val)) return root
//     else if ((root.val == p.val || root.val == q.val) &&
//         (hasDesc(root.left, p, q) || hasDesc(root.right, p, q))) return root
//     else if (hasDesc(root.left, p, q) && hasDesc(root.right, p, q)) return root
//     return lowestCommonAncestor(root.left, p, q) || lowestCommonAncestor(root.right, p, q)
// }


// function hasDesc(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): boolean {
//     if (!root) return false
//     else if (root.val == p.val || root.val == q.val) return true
//     return hasDesc(root.left, p, q) || hasDesc(root.right, p, q)
// }

/**
 *   LCS of Binary search tree
 *
 */
// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     while (root) {
//         if (root.val < p.val && root.val < q.val) root = root.right
//         else if (root.val > p.val && root.val > q.val) root = root.left
//         else return root
//     }
//     return root
// };

/**
 * Recusrsive solution
 * @param root
 * @param p 
 * @param q 
 * @returns 
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null) return root
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
    else if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
    return root
};