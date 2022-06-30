function detectCycle(head: ListNode | null): ListNode | null {
    if (head == null) return null
    let slow = head?.next
    let fast = head?.next?.next
    while (slow != fast) {
        slow = slow?.next
        fast = fast?.next?.next
    }
    while (head != fast) {
        head = head?.next
        fast = fast?.next
    }
    return head
};