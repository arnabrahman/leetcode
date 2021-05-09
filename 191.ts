function hammingWeight(n: number): number {
  let count: number = 0;
  while (n > 0) {
    if (n % 2 === 1) count++;
    n = (n / 2) | 0;
  }
  return count;
}

console.log(hammingWeight(1987));
