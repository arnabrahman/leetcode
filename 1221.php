class Solution {

/**
 * @param String $s
 * @return Integer
 */
function balancedStringSplit($s) {
    $r_cnt=$l_cnt=0;
    $balance=0;
    foreach(str_split($s) as $key=>$char){
        $char=='L'? $l_cnt++:$r_cnt++;
        if($l_cnt==$r_cnt){
         $balance++; 
         $r_cnt=$l_cnt=0;
        }
    }
    return $balance;
}
}