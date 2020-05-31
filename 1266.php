class Solution {
    private $count;

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function minTimeToVisitAllPoints($points) {
        for($i=1;$i<count($points);$i++){
            $this->calcSteps($points[$i-1],$points[$i]);
        }
        return $this->count;
    }
    
    function calcSteps($f_p,$s_p){
        $x1=$f_p[0];
        $y1=$f_p[1];
        $x2=$s_p[0];
        $y2=$s_p[1];
        $c=0;
        while($x1!=$x2 || $y1!=$y2){
           if($x1!=$x2) $x1<$x2? $x1++: $x1--;
           if($y1!=$y2) $y1<$y2? $y1++: $y1--;
           $this->count++;
        }
        
    }
}