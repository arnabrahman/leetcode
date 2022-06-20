
// class Node {
//     val: number
//     left: Node | null
//     right: Node | null
//     next: Node | null
//     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//         this.next = (next === undefined ? null : next)
//     }
// }
/**
 * 
 * Non recursive approach
 */
function connect(root: Node | null): Node | null {
    if (root == null) return null
    const queue: Node[] = [root]
    let start = 0
    let end = 0
    let isEmpty = true
    while (isEmpty) {
        const until = end
        const from = start
        for (let i = from; i <= until; i++) {
            queue[i].next = i + 1 > until ? null : queue[i + 1]
            if (queue[i].left) {
                queue.push(queue[i].left)
                end++
            }
            if (queue[i].right) {
                queue.push(queue[i].right)
                end++
            }
        }
        if (end > until) start = until + 1
        else isEmpty = false;
    }
    return root
};

function connect(root: Node | null): Node | null {
    if (root == null) return null
    let curr = root
    let next = root.left
    while (next != null) {
        curr.left.next = curr.right
        while (curr.next) {
            curr.right.next = curr.next.left
            curr = curr.next
            curr.left.next = curr.right
        }
        [curr, next] = [next, next.left]
    }
    return root
};
