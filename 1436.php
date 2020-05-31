class Solution {

/**
 * @param String[][] $paths
 * @return String
 */
function destCity($paths) {
    $cities=[];
    foreach($paths as $path){
        $cities[$path[0]]=1;
        if(!isset($cities[$path[1]]))$cities[$path[1]]=0;
    }
    foreach($cities as $city=>$value){
        if(!$value) return $city;
    }
}
}