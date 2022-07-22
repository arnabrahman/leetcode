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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1000, head)
    let prev = dummy
    let curr = head
    while (curr) {
        if (prev.val == curr.val) {
            prev.next = curr.next
            curr = curr.next
        } else {
            prev = curr
            curr = curr.next
        }
    }
    return dummy.next
};

printList(deleteDuplicates(makeList([0, 0, 0, 0, 0])))