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
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head.next == null) return null
    if (head.next.next == null) {
        if (n == 2) return head.next
        head.next = null
        return head
    }
    let left = null
    let right = null
    right = head
    for (let i = 0; i < n; i++) {
        right = right.next
    }
    while (right) {
        left = left == null ? head : left.next
        right = right.next
    }
    if (left) {
        right = left.next?.next
        left.next = right ? right : null
    } else {
        head = head.next
    }
    return head
};


function printList(mergeList: ListNode) {
    while (mergeList != null) {
        console.log(mergeList.val)
        mergeList = mergeList.next
    }
    console.log(" ")
}

function makeList(first: number[]) {
    if (first.length == 0) return null
    let list = new ListNode(first[first.length - 1])
    for (let i = first.length - 2; i >= 0; i--) {
        const temp = new ListNode(first[i])
        temp.next = list
        list = temp
    }
    return list
}

printList(removeNthFromEnd(makeList([1, 2, 3, 4, 5]), 5))

