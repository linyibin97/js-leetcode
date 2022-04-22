/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
    function TreeNode(val, father, deepth) {
        this.val = val
        this.deepth = deepth
        this.father = father
        this.children = []
    }
    const countTab = (s) => {
        let i = 0
        while (i<s.length && s[i]=='\t') i++
        return i
    }
    const dfs = (node, s) => {
        s.push(node.val)
        if (node.val.indexOf('.')!==-1) ret = Math.max(ret, s.slice(1).join('\n').length)
        for (let c of node.children) {
            dfs(c, s)
        }
        s.pop()
    }
    const dir = input.split('\n')
    const head = new TreeNode('', null, -1)
    let curr = head
    for (let j=0; j<dir.length; j++) {
        let c = countTab(dir[j])
        while (curr.deepth >= c) {
            curr = curr.father
        }
        let t = new TreeNode(dir[j].slice(c), curr, c)
        curr.children.push(t)
        curr = t
    }
    let ret = 0
    dfs(head, [])
    return ret
};