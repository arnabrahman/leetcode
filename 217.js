function containsDuplicate(nums) {
    var mapArray = {};
    for (var i = 0; i < nums.length; i++) {
        if (mapArray.hasOwnProperty(nums[i]))
            return true;
        mapArray[nums[i]] = 1;
    }
    return false;
}
console.log(containsDuplicate( [1,34,3,2,4]));
