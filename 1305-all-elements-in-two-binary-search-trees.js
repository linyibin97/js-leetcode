/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const dfs = (node, res) => {
        if (node == null) return 
        dfs(node.left, res)
        res.push(node.val)
        dfs(node.right, res)
    }
    const merge = (l1, l2) => {
        const n = l1.length
        const m = l2.length
        const l3 = []
        let i = 0, j = 0
        while (i<n || j<m) {
            if (i>=n) {
                l3.push(l2[j])
                j++
            } else if (j>=m) {
                l3.push(l1[i])
                i++
            } else if (l1[i]<l2[j]) {
                l3.push(l1[i])
                i++
            } else {
                l3.push(l2[j])
                j++
            }
        }
        return l3
    }
    const list1 = [], list2 = []
    dfs(root1, list1)
    dfs(root2, list2)
    return merge(list1, list2)
};