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
 * @return {TreeNode}
 */
 var convertBST = function(root) {
    let summap = new Map();
    const getsum = function(node) {
        if (node===null) return 0;
        let sum = node.val;
        sum = sum + getsum(node.left) + getsum(node.right);
        summap.set(node, sum);
        return sum;
    }
    let rootsum = getsum(root);
    const dfs = function(node, fatherval) {
        if (node===null) return;
        node.val = fatherval + node.val + (summap.get(node.right)||0);
        dfs(node.left, node.val);
        dfs(node.right, fatherval);
    }
    dfs(root,0);
    return root;
};

var convertBST = function(root) {
    let sum = 0;
    const dfs = function(root) {
        if (root===null) return;
        dfs(root.right);
        sum = sum + root.val;
        root.val = sum;
        dfs(root.left);
    }
    dfs(root);
    return root;  
};