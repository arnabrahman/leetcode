<?php

class Solution
{

    /**
     * @param String $S
     * @return String
     */
    function reverseOnlyLetters($S)
    {
        $i = 0;
        $j = strlen($S) - 1;
        while ($i < $j) {
            if ((33 <= ord($S[$j]) && ord($S[$j]) <= 64) || (91 <= ord($S[$j]) && ord($S[$j]) <= 96)) {
                $j--;
                continue;
            }
            if ((33 <= ord($S[$i]) && ord($S[$i]) <= 64) || (91 <= ord($S[$i]) && ord($S[$i]) <= 96)) {
                $i++;
                continue;
            }
            $temp = $S[$j];
            $S[$j] = $S[$i];
            $S[$i] = $temp;
            $i++;
            $j--;
        }
        return $S;
    }
}