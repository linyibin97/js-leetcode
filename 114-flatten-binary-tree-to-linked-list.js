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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if (!root) return null;
    if (!root.left && !root.right) return root;
    let l = flatten(root.left);
    let r = flatten(root.right);
    if (l) {
        l.right = root.right;
        root.right = root.left;
        root.left = null;
    } else {
        root.left = null;
    }
    return r || l;
};