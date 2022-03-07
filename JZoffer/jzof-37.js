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
    let ret = [];
    const ser = function(node) {
        if (node===null) {
            ret.push("null");
            return;
        }
        ret.push(node.val);
        ser(node.left);
        ser(node.right);
    }
    ser(root);
    return ret.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.split(',');
    let i = 0;
    const deser = function() {
        if (arr[i]==='null') {
            i++;
            return null;
        }
        let node = new TreeNode(arr[i]);
        i++;
        let left = deser()
        let right = deser()
        node.left = left;
        node.right = right;
        return node;
    }
    return deser();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */