<?php

class Solution
{

    /**
     * @param Integer $num
     * @return Boolean
     */
    function isPowerOfFour($num)
    {
        if ($num <= 4) {
            if ($num == 4 || $num == 1) return true;
            return false;
        }
        while ($num > 4) {
            $num = $num / 4;
            if ($num == 4) return true;
        }
        return false;
    }
}