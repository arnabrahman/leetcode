<?php

class Solution
{

    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n)
    {
        $res = [];
        $i = $j = 0;
        while ($i < $m && $j < $n) {
            if ($nums1[$i] <= $nums2[$j]) {
                array_push($res, $nums1[$i]);
                $i++;
            } else {
                array_push($res, $nums2[$j]);
                $j++;
            }
        }
        if ($i == $m) {
            $res = array_merge($res, array_slice($nums2, $j, $n - $j));
        } else {
            $res = array_merge($res, array_slice($nums1, $i, $m - $i));
        }
        $nums1 = $res;
        return $nums1;
    }
}