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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if (!root || (!root.left && !root.right)) return true;
    let a = [];
    let b = [];
    const verify = function(l) {        
        for (let i=0;i<Math.floor(l/2);i++) {
            if (!a[i] && a[l-i-1]) return false;
            if (a[i] && !a[l-i-1]) return false;
            if (a[i] && a[l-i-1] && a[i].val!==a[l-i-1].val) return false;
        }
        b = [];
        for (let i=0;i<a.length;i++) {
            if (!a[i]) b.push(null,null);
                else b.push(a[i].left,a[i].right);
        }
        a = b;
        let empty = true;
        for (let i=0;i<a.length;i++) if (a[i]) empty = false;
        if (empty) return true; else return verify(l*2);
    }
    a = [root];
    return verify(1);
};

var isSymmetric = function(root) {
    const verify = function(n1,n2) {        
        if (n1===null && n2===null) return true;
        if ((n1===null)!==(n2===null)) return false;
        if ((n1.left===null)!==(n2.right===null)) return false;
        if ((n1.right===null)!==(n2.left===null)) return false;
        if (n1.val!==n2.val) return false;
        return verify(n1.left,n2.right) && verify(n1.right,n2.left) 
    }
    return verify(root.left,root.right);
};