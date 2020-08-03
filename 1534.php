<?php

class Solution
{

    /**
     * @param Integer[] $arr
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer
     */
    function countGoodTriplets($arr, $a, $b, $c)
    {
        $len = count($arr);
        $res = 0;
        for ($i = 0; $i < $len - 2; $i++) {
            for ($j = $i + 1; $j < $len - 1; $j++) {
                for ($k = $j + 1; $k < $len; $k++) {
                    if (abs($arr[$i] - $arr[$j]) <= $a && abs($arr[$j] - $arr[$k]) <= $b && abs($arr[$i] - $arr[$k]) <= $c) $res++;
                }
            }
        }
        return $res;
    }
}