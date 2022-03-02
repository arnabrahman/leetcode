/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let count = 1;
    let pointer = head
    let first = null
    let last = null
    while (pointer.next) {
        count++
        pointer = pointer.next
    }
    pointer = head
    for (let i = 0; i < count; i++) {
        if (i == k - 1) first = pointer
        if (i == count - k) last = pointer
        if (first && last) break;
        pointer = pointer.next
    }
    [first.val, last.val] = [last.val, first.val]
    return head
};