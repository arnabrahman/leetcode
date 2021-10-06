function sortArrayByParityII(nums: number[]): number[] {
    let i = 0;
    let j = nums.length;
    let odd = []
    let even = []
    for (i = 0; i < j; i++) {
        if (isEven(nums[i])) even.push(nums[i])
        else odd.push(nums[i])
    }
    for (i = 0; i < j / 2; i++) {
       
        
        nums[i]=even[i]
        nums[i+1]=odd[i]
        console.log(nums);
    }
    return nums
    while (i < j) {
        let iNeedToSwap = false
        let jNeedToSwap = false
        if (isEven(i)) {
            if (isEven(nums[i])) i++
            else iNeedToSwap = true
        } else {
            if (!isEven(nums[i])) i++
            else iNeedToSwap = true
        } if (isEven(j)) {
            if (isEven(nums[j])) j--
            else jNeedToSwap = true
        } else {
            if (!isEven(nums[j])) j--
            else jNeedToSwap = true
        }
        if (jNeedToSwap && iNeedToSwap) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return nums
};

function isEven(n: number) {
    return n % 2 == 0
}

console.log(sortArrayByParityII([4,2,5,7]));
