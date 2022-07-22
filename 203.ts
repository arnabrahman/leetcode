class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(0, head)
    let curr = head
    let prev = dummy
    while (curr) {
        if (curr.val == val) {
            prev.next = curr.next
            curr = prev.next
        } else {
            prev = curr
            curr = curr.next
        }
    }
    return dummy.next
};
printList(removeElements(makeList([1, 1, 1, 1, 1, 1, 6]), 1))

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