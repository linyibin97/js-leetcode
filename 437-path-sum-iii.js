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
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
    const dfs = function(node) {
        const walk = function(node,target) {
            if (node===null) return;
            if (target===node.val) count++;
            return walk(node.left,target-node.val)+walk(node.right,target-node.val);
        }
        if (node===null) return 0;
        let count = 0;
        walk(node,targetSum);
        //console.log(node.val,count);
        return count+dfs(node.left)+dfs(node.right);
    }
    return dfs(root);
};


var pathSum = function(root, targetSum) {
    let prefix = new Map();
    prefix.set(0,1);
    const dfs = function(node,curr) {
        if (node===null) return 0;
        curr += node.val;
        let ret = prefix.get(curr-targetSum) || 0;
        prefix.set(curr, (prefix.get(curr) || 0) + 1);
        ret += dfs(node.left, curr);
        ret += dfs(node.right, curr);
        prefix.set(curr, prefix.get(curr)- 1);
        return ret;
    }
    return dfs(root,0);
};