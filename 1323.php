class Solution {

/**
 * @param Integer $num
 * @return Integer
 */
function maximum69Number ($num) {
    $digits=str_split($num);
    $max=(int)$num;
    for($i=0; $i<count($digits);$i++){
        $repl=$digits[$i]=='6'? '9':'6';
        $new_num=(int)substr_replace($num,$repl,$i,1);
        $max=$new_num>$max?$new_num:$max;
    }
    return $max;
}
}