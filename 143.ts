
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reorderList(head: ListNode | null): void {
    if (head.next == null || head.next.next == null) return
    let mid = head.next
    let end = head.next.next
    while (end?.next) {
        mid = mid.next
        if (end.next) end = end.next
        if (end.next) end = end.next
    }
    let temp = mid.next
    mid.next = null
    let newHead = head
    while (temp) {
        const next = temp.next
        temp.next = newHead
        newHead = temp
        temp = next
    }
    let prev = head
    while (newHead != head) {
        let curr = prev.next
        const anotherHead = newHead.next
        prev.next = newHead
        newHead.next = curr
        newHead = anotherHead
        prev = curr
    }
};

reorderList(makeList([1, 2]))

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
