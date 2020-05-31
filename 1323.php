class Solution {

/**
 * @param Integer $num
 * @return Integer
 */
function maximum69Number ($num) {
    $digits=str_split($num);
    foreach($digits as $key=>$val){
        if($val=='9') continue;
        return (int)substr_replace($num,'9',$key,1);
    }
    return (int)$num;
}
}