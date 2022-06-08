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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) return list2
    if (list2 == null) return list1
    let i = list1
    let j = list2
    let prev = null
    while (i && j) {
        if (i.val <= j.val) {
            prev = i
            i = i.next
        } else {
            if (prev == null) {
                prev = new ListNode(j.val)
                prev.next = i
                list1 = prev
                j = j.next
            } else {
                const temp = j.next
                prev.next = j
                j.next = i
                j = temp
                prev = prev.next
            }
        }
    }
    if (j != null) prev.next = j
    return list1
};

let mergeList = mergeTwoLists(makeList([]), makeList([4]))
console.log(mergeList);

printList(mergeList)

function printList(mergeList: ListNode) {
    while (mergeList) {
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

