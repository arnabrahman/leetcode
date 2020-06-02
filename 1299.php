<?php

class Solution
{

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function replaceElements($arr)
    {
        $res = [];
        $len = count($arr);
        $max = $arr[$len - 1];
        array_unshift($res, -1);
        for ($i = $len - 2; $i >= 0; $i--) {
            array_unshift($res, $max);
            if ($arr[$i] > $max) $max = $arr[$i];
        }
        return $res;
    }
}