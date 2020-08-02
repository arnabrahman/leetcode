<?php

class Solution
{

    /**
     * @param String $word
     * @return Boolean
     */
    function detectCapitalUse($word)
    {
        $uppercase = 0;
        $word_len = 0;
        $first_char_upper = 0;
        foreach (str_split($word) as $key => $char) {
            $ord = ord($char);
            if ($ord >= 65 && $ord <= 90) {
                $uppercase++;
                if ($key == 0) $first_char_upper = 1;
            }
            $word_len = $key + 1;
        }
        if ($word_len == $uppercase) return true;
        elseif ($uppercase == 0) return true;
        elseif ($first_char_upper && $uppercase == 1) return true;
        return false;

    }
}