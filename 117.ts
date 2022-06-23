function connect(root: Node | null): Node | null {
    if (root == null) return null
    let curr = root
    let next = root.left ?? root.right
    while (next != null || curr != null) {
        if (curr.left) curr.left.next = curr.right
        let prev = null
        while (curr.next) {
            if ((curr.left || curr.right) && (curr.next.left || curr.next.right)) (curr.right ?? curr.left).next = curr.next.left ?? curr.next.right
            else {
                prev = next?.next ?? next
                while (prev && prev.next) {
                    prev = prev.next
                }
            }
            curr = curr.next
            if (curr.left) curr.left.next = curr.right
        }

        if (prev && prev.next == null) prev.next = curr.left ?? curr.right
        const temp = next
        if (next) next = next.left ?? next.right
        curr = temp
    }
    return root
};