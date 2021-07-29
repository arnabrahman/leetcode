function customSortString(order: string, s: string): string {
    type cus = {
        order: number,
        value: string
    }
    let givenOrder = new Map()
    let orderOfGivenString: cus[] = []
    let resultedString = []
    for (let i = 0; i < order.length; i++) {
        givenOrder.set(order[i], i + 1)
    }
    for (let i = 0; i < s.length; i++) {
        orderOfGivenString.push({
            order: givenOrder.has(s[i]) ? givenOrder.get(s[i]) : 27,
            value: s[i]
        })
    }
    orderOfGivenString.sort((a, b) => a.order - b.order)
    orderOfGivenString.forEach((str) => resultedString.push(str.value))
    return resultedString.join("")
};

console.log(customSortString("kqep", "pekeq"))