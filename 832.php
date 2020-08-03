<?php

class Solution
{

    /**
     * @param Integer[][] $A
     * @return Integer[][]
     */
    function flipAndInvertImage($A)
    {
        for ($i = 0; $i < count($A); $i++) {
            $new_arr = [];
            for ($j = count($A[$i]) - 1; $j >= 0; $j--) {
                array_push($new_arr, $A[$i][$j] == 1 ? 0 : 1);
            }
            $A[$i] = $new_arr;
        }
        return $A;
    }
}