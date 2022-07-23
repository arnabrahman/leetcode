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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || head.next == null) return head

    let left = head
    let mid = getMid(head)
    let right = mid.next
    mid.next = null


    left = sortList(left)
    right = sortList(right)

    return merge(left, right)
};

function getMid(head: ListNode): ListNode {
    let slow = head
    let fast = head.next
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next?.next
    }
    return slow
}

function merge(left: ListNode, right: ListNode) {
    let dummy = new ListNode()
    let tail = dummy
    while (left && right) {
        if (left.val < right.val) {
            tail.next = left
            left = left.next
        } else {
            tail.next = right
            right = right.next
        }
        tail = tail.next
    }
    if (left) tail.next = left
    if (right) tail.next = right
    return dummy.next
}
// printList(getMid(makeList([10, 12])))
// printList(merge(makeList([10]), makeList([4])))
printList(sortList(makeList([10, 1, 4, 2, 1, 3, 40, 12])))
