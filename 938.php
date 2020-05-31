/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @param Integer $L
     * @param Integer $R
     * @return Integer
     */
    function rangeSumBST($root, $L, $R) {
        return ($this->inOrder($root,$L, $R,0));
    }
    
    function inOrder($root,$L, $R,$val){
         if($root==null) return $val;
         if($root->val>$L)$val=$this->inOrder($root->left,$L, $R,$val);
         if($this->ifValueInRange($L, $R,$root->val)) $val+=$root->val ;
         if($root->val<$R)$val= $this->inOrder($root->right,$L, $R,$val);
         return $val;
    }
    
    function ifValueInRange($L, $R, $val){
        return $val>=$L && $val<=$R;
    }
}