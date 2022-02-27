function middleNode(head: ListNode | null): ListNode | null {
    if (head.next == null) return head
    if (head.next.next == null) return head.next
    let cursor = head;
    let secondCursor = head.next.next
    let count = 3;
    while (secondCursor) {
        cursor = cursor.next
        if (secondCursor.next) count++
        if (secondCursor.next?.next) count++
        secondCursor = secondCursor.next?.next
    }
    if (count % 2 == 0) return cursor.next
    return cursor
};