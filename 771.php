class Solution {

/**
 * @param String $J
 * @param String $S
 * @return Integer
 */
function numJewelsInStones($J, $S) {
    $jewels = str_split($J);
    $stones= str_split($S);
    $i=0;
    $jewel_set=[];
    foreach($jewels as $jewel){
        $jewel_set[$jewel]=1;
    }
    foreach($stones as $stone){
        if(isset($jewel_set[$stone])){
            $i++;
        }
    }
    return $i;
}
}