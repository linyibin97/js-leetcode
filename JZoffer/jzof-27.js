/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
    if (root===null) return null;
    let t = root.right;
    root.right = root.left;
    root.left = t;
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
};