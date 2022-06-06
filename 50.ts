function myPow(x: number, n: number): number {
    let memory = new Map()
    memory.set(1, x)
    memory.set(2, x * x)
    let isNegative = n < 0
    n = isNegative ? n * -1 : n
    let temp = Math.floor(n / 2) ?? 1
    if (n > 2) {
        for (let i = (temp % 2 == 0) ? 4 : 3; i <= temp; i += 2) {
            memory.set(i, memory.get(2) * memory.get(i - 2))
        }
    }
    console.log(memory, temp);

    let result = (n % 2 == 0) ? memory.get(temp) * memory.get(temp) : (memory.get(temp) * memory.get(temp) * x)
    return isNegative ? 1 / result : result
};

console.log(myPow(2, -1));
