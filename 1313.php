<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    public function decompressRLElist($nums)
    {
        $freq = [];
        $val = [];
        for ($i = 2; $i <= 100; $i = $i + 2) {
            $j++;
            if (!isset($nums[$i - 2])) {
                break;
            }

            $freq[$i] = $nums[$i - 2];
            $val[$i] = $nums[$i - 1];
        }
        $result = [];
        $i = 2;
        $count = $freq[$i];
        $value_to_be_printed = $val[$i];
        while ($count > 0) {
            array_push($result, $value_to_be_printed);
            $count--;
            if ($count == 0 && isset($freq[$i + 2])) {
                $i += 2;
                $count = $freq[$i];
                $value_to_be_printed = $val[$i];
            }
        }
        return $result;
    }
}
