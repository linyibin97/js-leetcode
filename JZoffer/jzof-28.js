/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const dfs = function(A,B) {
        if (A===null&&B===null) return true;
        if (A===null||B===null) return false;
        if (A.val!==B.val) return false;
        return dfs(A.left,B.right)&&dfs(A.right,B.left);
    }
    return dfs(root,root);
};