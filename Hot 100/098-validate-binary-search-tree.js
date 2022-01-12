/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const travel = function (n) {
        if (n===null) return [];
        return [...travel(n.left),n.val,...travel(n.right)]
    }
    let itr = travel(root);
    for (let i=0;i<itr.length;i++) 
        if (i===itr.length-1) return true
            else if (itr[i]>=itr[i+1]) return false;
};