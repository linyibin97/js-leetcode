/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    let p = 0;
    let map = new Map();
    for (let i=0; i<inorder.length; i++) map.set(inorder[i],i);
    const build = function(il,ir) {
        if (il>ir) return null;
        let root = new TreeNode(preorder[p++]);
        let i = map.get(root.val);
        root.left = build(il,i-1);
        root.right = build(i+1,ir);
        return root;
    }
    return build(0,inorder.length-1);
};