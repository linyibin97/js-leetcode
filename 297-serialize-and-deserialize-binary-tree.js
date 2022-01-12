/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let tree = [];
    const walk = function(node) {
        if (node===null) {
            tree.push("null");
            return;
        }
        tree.push(node.val.toString());
        walk(node.left);
        walk(node.right);
    }
    walk(root);
    return tree.join(',');
}; 

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let i = -1;
    tree = data.split(',');
    const walk = function() {   
        i++;
        if (tree[i]==="null") return null;
        let node = new TreeNode(Number(tree[i]));
        node.left = walk();
        node.right = walk();
        return node;
    }
    return walk();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */