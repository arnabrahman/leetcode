<?php

class Solution
{
    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function countNegatives($grid)
    {
        $cnt = 0;
        for ($i = 0; $i < count($grid); $i++) {
            $len = count($grid[$i]);
            $cnt += ($len - ($this->binarySearch($grid[$i], $len - 1) + 1));
        }
        return $cnt;
    }

    function binarySearch(array $arr, $end)
    {
        $start = 0;
        $ans = -1;

        while ($start <= $end) {
            $mid = (int)(($start + $end) / 2);

            if ($arr[$mid] < 0) {
                $end = $mid - 1;
                $ans = $mid - 1;
            } else {
                $start = $mid + 1;
                $ans = $mid;
            }
        }

        return $ans;
    }


}

//[[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]]