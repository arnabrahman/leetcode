function sumBase(n: number, k: number): number {
    let res = 0;
    while (n > 0) {
        n = Math.round(n / k);

    }
};

console.log(sumBase(34, 6))