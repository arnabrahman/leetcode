function middleNode(head: ListNode | null): ListNode | null {
    if (head.next == null) return head
    if (head.next.next == null) return head.next
    let cursor = head;
    let secondCursor = head.next?.next
    while (secondCursor) {
        cursor = cursor.next
        secondCursor = secondCursor.next?.next
    }
    return cursor
};