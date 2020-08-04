<?php

class Solution
{

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isPowerOfTwo($n)
    {
        if ($n <= 2) {
            if ($n == 2 || $n == 1) return true;
            return false;
        }
        while ($n > 2) {
            $n = $n / 2;
            if ($n == 2) return true;
        }
        return false;
    }
}