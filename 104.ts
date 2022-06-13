class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function maxDepth(root: TreeNode | null): number {
    if (root == null) return 0
    return 1 + Math.max(getSum(root.left, 0), getSum(root.right, 0))
};

function getSum(root: TreeNode | null, sum: number) {
    if (root == null) return sum
    else {
        return 1 + Math.max(getSum(root.left, 0), getSum(root.right, 0))
    }
}