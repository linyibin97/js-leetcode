/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    let arr = [];
    const dfs = function(node) {
        if (node===null) return null;
        dfs(node.left);
        arr.push(node);
        dfs(node.right);
    }
    dfs(root);
    if (arr.length===0) return root;
    if (arr.length===1) {
        arr[0].left = arr[0];
        arr[0].right = arr[0];
        return arr[0];
    }
    arr[0].left = arr[arr.length-1];
    arr[0].right = arr[1];
    arr[arr.length-1].left = arr[arr.length-2];
    arr[arr.length-1].right = arr[0];
    for (let i=1;i<arr.length-1;i++) {
        arr[i].left = arr[i-1];
        arr[i].right = arr[i+1];
    }
    return arr[0];
};

var treeToDoublyList = function(root) {
    let pre = null, head = null;
    const dfs = function(node) {
        if (node===null) return null;
        dfs(node.left);
        if (head===null) head = node;
        if (pre!==null) pre.right = node;
        node.left = pre;
        pre = node;
        dfs(node.right);
    }
    if (root===null) return null;
    dfs(root);
    head.left = pre;
    pre.right = head;
    return head;
};