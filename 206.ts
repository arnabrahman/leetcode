
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    if (head == null) return head;
    let previousHead = null
    let presentHead = head
    let nextHead = head.next
    while (nextHead) {
        presentHead.next = previousHead
        previousHead = presentHead
        presentHead = nextHead
        nextHead = nextHead.next
    }
    presentHead.next = previousHead
    return presentHead
};