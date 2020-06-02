<?php

class Solution
{

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function replaceElements($arr)
    {
        $len = count($arr);
        $max = $arr[$len - 1];
        $arr[$len - 1] = -1;
        for ($i = $len - 2; $i >= 0; $i--) {
            $temp = $arr[$i];
            $arr[$i] = $max;
            if ($temp > $max) $max = $temp;
        }
        return $arr;
    }
}