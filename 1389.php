class Solution {

/**
 * @param Integer[] $nums
 * @param Integer[] $index
 * @return Integer[]
 */
function createTargetArray($nums, $index) {
    $target=array();
    for($i=0; $i<count($nums); $i++){
        array_splice($target, $index[$i], 0, $nums[$i] );
    }
    return $target;
}
}