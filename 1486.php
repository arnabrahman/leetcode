<?php

class Solution
{

    /**
     * @param Integer $n
     * @param Integer $start
     * @return Integer
     */
    function xorOperation($n, $start)
    {
        $nums = [];
        $xor = null;
        for ($i = 0; $i < $n; $i++) {
            $nums[$i] = $start + 2 * $i;
            if (!$xor) $xor = $nums[$i];
            else $xor = $xor ^ $nums[$i];
        }
        return $xor;
    }
}