/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let fathers = new Set();
    let result = false;
    const findp = function(node) {
        if (node===null) return false;
        if (node===p || findp(node.left) || findp(node.right)) {
            fathers.add(node.val);
            return true;
        } else return false;
    }
    const findq = function(node) {
        if (node===null) return false;
        if (node===q || findq(node.left) || findq(node.right)) {
            if (result===false && fathers.has(node.val)) {
                result=node;
            }
            return true;
        } else return false;
    }
    findp(root);
    findq(root);
    return result;
};

var lowestCommonAncestor = function(root, p, q) {
    let res = null
    dfs(root)
    return res
    function dfs(node) {
        if (node===null) return false
        let l = dfs(node.left)
        let r = dfs(node.right)
        if ((l && r) || ((node===p || node===q)&&(l || r))) res = node
        return l || r || node===p || node===q
    }
}