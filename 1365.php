class Solution
{

/**
 * @param Integer[] $nums
 * @return Integer[]
 */
    public function smallerNumbersThanCurrent($nums)
    {
        $unsorted_nums = $nums;
        sort($nums);
        $nums = array_unique($nums);
        $result = [];
        foreach ($nums as $key => $num) {
            if ($key == 0) {
                $result[$num] = 0;
            } else {
                $result[$num] = $key;
            }
        }
        $final = [];
        foreach ($unsorted_nums as $num) {
            array_push($final, $result[$num]);
        }
        return $final;
    }
}
