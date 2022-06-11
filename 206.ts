
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}



function reverseList(head: ListNode | null): ListNode | null {
    if (head == null) {
        return null
    } else if (head.next == null) {
        return head
    } else {
        const tail = head
        const rest = head.next
        tail.next = null
        const rev = reverseList(rest)
        printList(tail)

        rev.next = tail
        return rev
        // rev.next = tail
        // printList(rev)
        // printList(tail)
        // return rev
    }
};


// function reverseTwoNodes(firstNode: ListNode, secondNode: ListNode | null) {
//     if (secondNode == null) return firstNode
//     secondNode.next = firstNode
//     firstNode.next = null
//     return secondNode
// }


//Iteratively
// function reverseList(head: ListNode | null): ListNode | null {
//     if (!head) return null
//     let curr = head.next
//     head.next = null
//     while (curr) {
//         const temp = curr.next
//         curr.next = head
//         head = curr
//         curr = temp
//     }
//     return head

// };

let res = reverseList(makeList([4, 5, 6, 7, 8]))
printList(res)


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
