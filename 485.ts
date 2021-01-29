function findMaxConsecutiveOnes(nums: number[]): number {
  var first = 0,
    second = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      first++;
    } else {
      second = first > second ? first : second;
      first = 0;
    }
  }
  return first > second ? first : second;
}

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1, 1, 1, 1]));
