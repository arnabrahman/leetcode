<?php

class Solution
{

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isPowerOfThree($n)
    {
        if ($n <= 3) {
            if ($n == 3 || $n == 1) return true;
            return false;
        }
        while ($n > 3) {
            $n = $n / 3;
            if ($n == 3) return true;
        }
        return false;
    }
}