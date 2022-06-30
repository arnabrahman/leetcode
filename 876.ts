// function middleNode(head: ListNode | null): ListNode | null {
//     if (head.next == null) return head
//     if (head.next.next == null) return head.next
//     let cursor = head;
//     let secondCursor = head.next.next
//     let count = 3;
//     while (secondCursor) {
//         cursor = cursor.next
//         if (secondCursor.next) count++
//         if (secondCursor.next?.next) count++
//         secondCursor = secondCursor.next?.next
//     }
//     if (count % 2 == 0) return cursor.next
//     return cursor
// };


function middleNode(head: ListNode | null): ListNode | null {
    if (head == null) return null
    let slow = head
    if (!slow.next) return slow
    let fast = head.next?.next
    while (fast?.next) {
        fast = fast.next?.next
        slow = slow.next
    }
    return slow.next
};