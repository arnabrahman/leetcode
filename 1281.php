<?php

class Solution
{

    /**
     * @param Integer $n
     * @return Integer
     */
    public function subtractProductAndSum($n)
    {
        $p = 1;
        $s = 0;
        while ($n > 0) {
            $last = $n % 10;
            $n = (int)($n / 10);
            $p *= $last;
            $s += $last;
        }
        return $p - $s;
    }
}
