<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $n
     * @return Integer[]
     */
    function shuffle($nums, $n)
    {
        $len = count($nums);
        $i = 0;
        $j = $len / 2;
        $res = [];
        while ($i < $len / 2) {
            array_push($res, $nums[$i]);
            array_push($res, $nums[$j]);
            $i++;
            $j++;
        }
        return $res;
    }
}