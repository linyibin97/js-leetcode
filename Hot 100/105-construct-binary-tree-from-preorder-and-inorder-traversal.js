/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    const build = function (p,i1,i2) {
        if (i1===i2) return null;
        let root = new TreeNode(preorder[p])
        let i = i1;
        while (i<i2 && preorder[p]!==inorder[i]) i++;
        root.left = build(p+1,i1,i);
        root.right = build(p+(i-i1)+1,i+1,i2);
        return root;
    }
    return build(0,0,preorder.length);
};

var buildTree = function(preorder, inorder) {
    if (inorder.length===0) return null
    if (inorder.length===1) return new TreeNode(preorder[0])
    const inorderRoot = inorder.indexOf(preorder[0])
    return new TreeNode(
        preorder[0],
        buildTree(preorder.slice(1,1+inorderRoot), inorder.slice(0,inorderRoot)),
        buildTree(preorder.slice(1+inorderRoot), inorder.slice(inorderRoot+1))
    )
};