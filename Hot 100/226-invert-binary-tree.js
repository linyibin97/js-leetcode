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
var invertTree = function(root) {
    if (root===null) return null;
    let t = root.left;
    root.left = root.right;
    root.right = t;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

var invertTree = function(root) {
    if (root===null) return null
    let nodes = [root]
    while (nodes.length>0) {
        let next = []
        for (let i=0; i<nodes.length; i++) {
            [nodes[i].left, nodes[i].right] = [nodes[i].right, nodes[i].left]
            if (nodes[i].left!==null) next.push(nodes[i].left)
            if (nodes[i].right!==null) next.push(nodes[i].right)
        }
        nodes = next
    }
    return root
};