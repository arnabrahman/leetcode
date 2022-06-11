function hasCycle(head: ListNode | null): boolean {
    let slow: ListNode = head?.next, fast: ListNode = head?.next?.next
    if (!slow || !fast) return false
    while (slow != fast) {
        slow = slow.next
        fast = fast.next?.next
        if (!slow || !fast) return false
    }
    return true
}; 