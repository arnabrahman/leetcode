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
            while($j<$n){
                array_push($res, $nums2[$j]);
                $j++;
            }
        } else {
            while($i<$m){
                array_push($res, $nums1[$i]);
                $i++;
            }
        }
        $nums1 = $res;
        return $nums1;
    }
}