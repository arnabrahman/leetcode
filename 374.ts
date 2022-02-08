
function guessNumber(n: number): number {
    return divideAndConquer(1, n, n / 2)
};

function divideAndConquer(first: number, last: number, mid: number): number {
    mid = Math.floor(mid)
    const res = guess(mid)
    if (res == 0) return mid
    else if (res == 1) return divideAndConquer(mid + 1, last, (mid + 1 + last) / 2)
    else return divideAndConquer(first, mid - 1, (first + mid - 1) / 2)
}

function guess(guess: number): number {
    const pick = 2
    if (guess == pick) return 0;
    else if (guess < pick) return 1;
    else -1
}

console.log(guessNumber(10));
