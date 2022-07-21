
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let leftNode = head
    let previousOfLeftNode = null
    let reverseHead = null
    let lastOfReverse = null

    for (let i = 0; i < left - 1; i++) {
        previousOfLeftNode = leftNode
        leftNode = leftNode.next
    }

    while (left <= right) {
        const leftNodeNext = leftNode.next
        addNode(leftNode)
        if (previousOfLeftNode) previousOfLeftNode.next = leftNodeNext
        leftNode = previousOfLeftNode ? previousOfLeftNode.next : leftNodeNext
        left++
    }

    if (previousOfLeftNode) previousOfLeftNode.next = reverseHead
    else head = reverseHead
    lastOfReverse.next = leftNode

    function addNode(node: ListNode) {
        if (!reverseHead) {
            reverseHead = node
            reverseHead.next = null
            lastOfReverse = reverseHead
        }
        else {
            node.next = reverseHead
            reverseHead = node
        }
    }
    return head
};

printList(reverseBetween(makeList([1, 2, 3, 4, 5]), 3, 5))

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