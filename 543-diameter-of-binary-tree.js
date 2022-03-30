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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    let result = 0;
    const dfs = function(node) {
        if (node===null) return 0;
        let l = dfs(node.left);
        let r = dfs(node.right);
        result = Math.max(result,l+r+1);
        return Math.max(l,r)+1;
    }
    dfs(root);
    return result-1;
};