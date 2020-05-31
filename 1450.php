class Solution {

/**
 * @param Integer[] $startTime
 * @param Integer[] $endTime
 * @param Integer $queryTime
 * @return Integer
 */
function busyStudent($startTime, $endTime, $queryTime) {
    $cnt=0;
    foreach($startTime as $key=>$time){
        if($time<=$queryTime && $endTime[$key]>=$queryTime){
            $cnt++;
        }
    }
    return $cnt;
}
}