<?php

class Solution
{

    /**
     * @param String $s
     * @param Integer[] $indices
     * @return String
     */
    function restoreString($s, $indices)
    {

        $res = [];
        foreach (str_split($s) as $key => $val) {
            $res[$indices[$key]] = $val;
        }
        ksort($res);
        return implode('', $res);
    }
}