<?php

class Solution
{
    /**
     * @param Integer $n
     * @return Boolean
     * https://www.mathsisfun.com/algebra/logarithms.html
     */
    function isPowerOfTwo($n)
    {
        if ($n > 0) {
            $res = log($n, 2);
            return pow(2, (int)$res) == $n;
        }
        return false;
    }
}