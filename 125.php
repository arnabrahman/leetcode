<?php

class Solution
{

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s)
    {
        $given_string = str_split($s);
        $i = 0;
        $j = count($given_string) - 1;
        while ($i != $j && $i < $j) {
            if (!preg_match('/[a-zA-Z0-9]/', $given_string[$i])) {
                $i++;
                continue;
            }
            if (!preg_match('/[a-zA-Z0-9]/', $given_string[$j])) {
                $j--;
                continue;
            }
            if (strcasecmp($given_string[$i], $given_string[$j]) != 0) return false;
            $i++;
            $j--;
        }
        return true;
    }
}