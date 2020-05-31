class Solution {

/**
 * @param Integer[] $nums
 * @return Integer
 */
function findNumbers($nums) {
    $even_count=0;
    foreach($nums as $num){
        if(strlen($num)%2==0)$even_count++;   
    }
    return $even_count;
}
}