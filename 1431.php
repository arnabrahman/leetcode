<?php

class Solution
{

    /**
     * @param Integer[] $candies
     * @param Integer $extraCandies
     * @return Boolean[]
     */
    function kidsWithCandies($candies, $extraCandies)
    {
        $max_value = max($candies);
        for ($i = 0; $i <= 100; $i++) {
            if (!isset($candies[$i])) break;
            if ($candies[$i] >= $max_value) $candies[$i] = true;
            else $candies[$i] = $candies[$i] + $extraCandies >= $max_value;
        }
        return $candies;

    }
}