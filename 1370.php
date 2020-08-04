<?php

class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function sortString($s)
    {
        $given_string = str_split($s);
        $letters = [];
        $final_string = '';
        foreach ($given_string as $ch) {
            $letters[$ch] += 1;
        }
        while (strlen($s) != strlen($final_string)) {
            for ($i = 97; $i <= 122; $i++) {
                $ch = chr($i);
                if (isset($letters[$ch]) && $letters[$ch] > 0) {
                    $final_string .= $ch;
                    $letters[$ch] -= 1;
                }
            }
            for ($i = 122; $i >= 97; $i--) {
                $ch = chr($i);
                if (isset($letters[$ch]) && $letters[$ch] > 0) {
                    $final_string .= $ch;
                    $letters[$ch] -= 1;
                }
            }
        }
        return $final_string;
    }
}
