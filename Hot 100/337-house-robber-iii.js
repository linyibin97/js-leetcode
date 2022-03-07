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
 var rob = function(root) {
    const dfs = function(node) {
        if (node===null) return;
        dfs(node.left);
        dfs(node.right);
        let took = node.val;
        if (node.left!==null) {
            if (node.left.left!==null) took+=node.left.left.max;
            if (node.left.right!==null) took+=node.left.right.max;
        }
        if (node.right!==null) {
            if (node.right.left!==null) took+=node.right.left.max;
            if (node.right.right!==null) took+=node.right.right.max;
        }
        let donttake = 0;
        if (node.left!==null) donttake += node.left.max;
        if (node.right!==null) donttake += node.right.max;
        node.max = Math.max(took,donttake);
    }
    dfs(root);
    return root.max;
};


var rob = function(root) {
    return Math.max(...dfs(root))
    function dfs(node) {
        if (node===null) return [0, 0]
        let l = dfs(node.left)
        let r = dfs(node.right)
        let take = node.val + l[1] + r[1]
        let donttake = Math.max(l[0],l[1]) + Math.max(r[0],r[1])
        return [take, donttake]
    }
};