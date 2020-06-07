<?php

class Solution
{

    /**
     * @param Integer $n
     * @return Integer[]
     */
    function sumZero($n)
    {
        $res = [];
        if ($n % 2 != 0) {
            $res[] = 0;
            $n--;
        }
        while ($n > 0) {
            $res[] = $n;
            $res[] = -$n;
            $n -= 2;
        }
        return $res;
    }
}