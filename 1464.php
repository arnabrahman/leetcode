<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxProduct($nums)
    {
        $len = count($nums);
        if ($len == 2) return ($nums[$len - 1] - 1) * ($nums[$len - 2] - 1);
        sort($nums);
        return ($nums[$len - 1] - 1) * ($nums[$len - 2] - 1);
    }
}