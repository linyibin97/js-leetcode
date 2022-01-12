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
 var maxPathSum = function(root) {
    let result = -Infinity;
    const dfs = function(n) {
        n.maxsum  = n.val;
        result = Math.max(result,n.val);
        if (!n.left && !n.right) {
            return;
        }
        if (n.left) {
            dfs(n.left)
            n.maxsum = Math.max(n.maxsum,n.val+n.left.maxsum);
            result = Math.max(result,n.left.maxsum+n.val);
        }
        if (n.right) {
            dfs(n.right)
            n.maxsum = Math.max(n.maxsum,n.val+n.right.maxsum);
            result = Math.max(result,n.right.maxsum+n.val);
        }
        if (n.left && n.right) 
            result = Math.max(result,n.left.maxsum+n.val+n.right.maxsum);
    }
    dfs(root);
    return result;
};