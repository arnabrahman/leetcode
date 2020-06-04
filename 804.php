<?php

class Solution
{

    /**
     * @param String[] $words
     * @return Integer
     */
    function uniqueMorseRepresentations($words)
    {
        $letters = array_flip(range('a', 'z'));
        $codes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
            "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

        $word_lengths = [];
        $full_word = '';
        foreach ($words as $key => $word) {
            $full_word .= $word;
            $word_lengths[$key] = strlen($word);
        }
        $i = 0;
        $j = $word_lengths[0] - 1;
        $res = [];
        $form_word = '';
        foreach (str_split($full_word) as $key => $word) {
            $form_word .= $codes[$letters[$word]];
            if ($key == $j) {
                array_push($res, $form_word);
                $form_word = '';
                $i++;
                $j += $word_lengths[$i];
            }

        }
        return count(array_unique($res));
    }
}