function timeRequiredToBuy(tickets: number[], k: number): number {
    let count = 0
    for (let i = 0; i < tickets.length; i++) {
        count += (tickets[i] < tickets[k] ? tickets[i] : (i <= k ? tickets[k] : tickets[k] - 1))
    }
    return count
};

console.log(timeRequiredToBuy([5, 1, 2, 5], 0));
