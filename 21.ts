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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const newList = list1.val <= list2.val ? list1 : list2
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            const temp = new ListNode(list2.val, null)
            list1.next = temp
            list1 = temp.next
        } else {
            const temp = new ListNode(list2.val, null)


        }

    }

};