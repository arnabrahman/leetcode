function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let length = 0;
    let originalHead = head
    let result = []
    while (head != null) {
        length++
        head = head.next
    }
    if (length <= k) {
        while (originalHead != null) {
            let temp = originalHead
            originalHead = originalHead.next
            temp.next = null
            result.push(temp)
            k--
        }
        for (let i = 0; i < k; i++) {
            result.push(null)
        }
    } else {
        let remainder = length % k
        let dividedResult = Math.floor(k / length)
        let x = 0
        if (remainder > 0) x = Math.ceil(remainder / dividedResult)
        let count = 0
        let temp = originalHead
        for (let i = 0; i < length; i++) {
            if (i < dividedResult + (remainder > 0 ? x : 0)) {
                originalHead = originalHead.next
                continue
            } else {
                temp.next = null
                result.push(temp)
            }
        }

    }

    return result
};