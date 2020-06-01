class Solution {

/**
 * @param Integer[] $target
 * @param Integer[] $arr
 * @return Boolean
 */
function canBeEqual($target, $arr) {
    if($target==$arr) return true;
    sort($target);
    sort($arr);
    return $target==$arr;
}
}