function containsDuplicate(nums: number[]): boolean {
  let mapArray = {};
  for (let i = 0; i < nums.length; i++) {
    if (mapArray.hasOwnProperty(nums[i])) return true;
    mapArray[nums[i]] = 1;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
