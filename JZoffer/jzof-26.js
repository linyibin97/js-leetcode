/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    let result=false;
    const check = function(A,B) {
        if (B===null) return true;
        if (A===null) return false;
        if (A.val !== B.val) return false;
        return check(A.left,B.left)&&check(A.right,B.right);
    }
    const dfs = function(A,B) {
        if (A===null) return;
        if (result) return;
        result = result || check(A,B);
        dfs(A.left,B);
        dfs(A.right,B);
    }
    if (B===null) return false;
    dfs(A,B);
    return result;
};