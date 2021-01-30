function sortedSquares(nums: number[]): number[] {
  var first_index = 0;
  var last_index = nums.length - 1;
  var len = last_index;
  var final = [];
  while (first_index < last_index) {
    if (Math.abs(nums[first_index]) < Math.abs(nums[last_index])) {
      final[len] = nums[last_index] * nums[last_index];
      last_index--;
    } else {
      final[len] = nums[first_index] * nums[first_index];
      first_index++;
    }
    len--;
  }
  if (first_index == last_index)
    final[len] = nums[first_index] * nums[first_index];
  else final[len] = nums[last_index] * nums[last_index];
  return final;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
