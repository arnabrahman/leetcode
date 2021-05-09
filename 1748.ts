function sumOfUnique(nums: number[]): number {
    interface NumMap { [key: number]: number; }
    let dic: NumMap = {};
    for (const num of nums) {
        if (dic[num]) dic[num]++;
        else dic[num] = 1;
    }
    let res: number = 0;
    for (let num in dic) {
        if (dic[num] == 1) res += num;
    }
    return res
};