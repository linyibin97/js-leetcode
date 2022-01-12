function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

var levelOrder = function(root) {
    if (!root) return [];
    let a = [root];
    let b = [];
    let t = [];
    let result = [];
    while (true) {
        t = [];
        b = [];
        for (let i=0;i<
            a.length;i++) {
            t.push(a[i].val);
            if (a[i].left) b.push(a[i].left);
            if (a[i].right) b.push(a[i].right);
        }
        result.push(t);
        if (b.length===0) break;
        a = b;
    }
    return result;
};

root = new TreeNode(3,new TreeNode(9,null,null),new TreeNode(20,new TreeNode(15,null,null),new TreeNode(7,null,null)))
console.log(levelOrder(root));