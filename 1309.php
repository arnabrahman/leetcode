<?php

class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function freqAlphabets($s)
    {
        $dec_string = str_split($s);
        $res = '';
        $i = 0;
        while ($i < count($dec_string)) {
            if ($dec_string[$i] == '#') {
                $res .= chr((int)($dec_string[$i - 2] . $dec_string[$i - 1]) + 96);
                $i++;
            } elseif ($dec_string[$i + 2] == '#') {
                $i += 2;
            } else {
                $res .= chr((int)$dec_string[$i] + 96);
                $i++;
            }
        }
        return $res;
    }
}