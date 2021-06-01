function minPartitions(n: string): number {
  let max: number = 0;
  for (let num of n) {
    max = max > +num ? max : +num;
  }
  return max;
}
