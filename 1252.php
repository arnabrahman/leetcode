class Solution {

/**
 * @param Integer $n
 * @param Integer $m
 * @param Integer[][] $indices
 * @return Integer
 */
function oddCells($n, $m, $indices) {
    $row=[];
    $col=[];
    $odd_count=$m*$n;
    foreach($indices as $indice){
        if(isset($row[$indice[0]]))$row[$indice[0]]+=1;
        else $row[$indice[0]]=1;
        if(isset($col[$indice[1]]))$col[$indice[1]]+=1;
        else $col[$indice[1]]=1;
    }
    for($i=0;$i<$n;$i++){
        for($j=0;$j<$m;$j++){
            $cnt=0;
            if(isset($row[$i])) $cnt+=$row[$i];
            if(isset($col[$j]))$cnt+=$col[$j];
            if($cnt%2==0)$odd_count--;
        }
    }
    return $odd_count;
}
}