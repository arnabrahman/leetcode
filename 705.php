<?php

class MyHashSet
{
    private $hashArray;

    /**
     * Initialize your data structure here.
     */
    function __construct()
    {
        $this->hashArray = [];
    }

    /**
     * @param Integer $key
     * @return NULL
     */
    function add($key)
    {
        $this->hashArray[$key] = 1;
        return null;
    }

    /**
     * @param Integer $key
     * @return NULL
     */
    function remove($key)
    {
        if ($this->contains($key)) unset($this->hashArray[$key]);
        return null;
    }

    /**
     * Returns true if this set contains the specified element
     * @param Integer $key
     * @return Boolean
     */
    function contains($key)
    {
        return isset($this->hashArray[$key]);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * $obj = MyHashSet();
 * $obj->add($key);
 * $obj->remove($key);
 * $ret_3 = $obj->contains($key);
 */