<?php

class Solution
{

    /**
     * @param String $str
     * @return String
     */
    function toLowerCase($str)
    {
        $res = '';
        foreach (str_split($str) as $ch) {
            $asci = ord($ch);
            if ($asci >= 65 && $asci <= 90) $res .= chr($asci + 32);
            else $res .= $ch;
        }
        return $res;
    }
}