/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    if (root1===null && root2===null) return null;
    let l1=null,l2=null,r1=null,r2=null,val=0;
    if (root1!==null) {
        l1 = root1.left;
        r1 = root1.right;
        val += root1.val;
    }
    if (root2!==null) {
        l2 = root2.left;
        r2 = root2.right;
        val += root2.val;
    }
    return new TreeNode(val,mergeTrees(l1,l2),mergeTrees(r1,r2));
};