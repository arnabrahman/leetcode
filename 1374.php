<?php

class Solution
{

    /**
     * @param Integer $n
     * @return String
     */
    function generateTheString($n)
    {
        $final = '';
        if ($n % 2 == 0) {
            for ($i = 0; $i < $n - 1; $i++) {
                $final .= 'a';
            }
            $final .= 'b';
        } else {
            for ($i = 0; $i < $n; $i++) {
                $final .= 'a';
            }
        }
        return $final;
    }
}