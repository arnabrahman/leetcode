class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

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

function partition(head: ListNode | null, x: number): ListNode | null {
    const dummy = new ListNode(-200, head)
    let prev = dummy
    let curr = head
    let bigHead = null
    let big = null
    while (curr) {
        if (curr.val >= x) {
            if (big) {
                big.next = curr
                big = curr
            } else {
                big = curr
                bigHead = big
            }
            prev.next = curr.next
            curr = prev.next
            big.next = null
        } else {
            prev = curr
            curr = curr.next
        }
    }
    prev.next = bigHead
    return dummy.next
};
// printList(partition(makeList([1, 4, 3, 2, 5, 2]), 3));
printList(partition(makeList([3, 1, 10, 1, 4, 2, 6]), 4))