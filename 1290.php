<?php

/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution
{

    /**
     * @param ListNode $head
     * @return Integer
     */
    function getDecimalValue($head)
    {
        $decimal = $head->val;
        while ($head->next) {
            $decimal = ($decimal << 1 | $head->next->val);
            $head = $head->next;
        }
        return $decimal;
    }
}