var findWords = function(board, words) {
    const n = board.length
    const m = board[0].length
    const visited = Array.from(new Array(n), ()=>new Array(m).fill(false))
    const directions = [[-1,0],[1,0],[0,1],[0,-1]]
    let ret = new Set()
    let root = new TreeNode()
    for (let w of words) {
        buildTree(root,w)
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            dfs(i,j,root,'')
        }
    }
    return Array.from(ret)
    
    function TreeNode() {
        this.end = false
        this.children = {}
    }
    function buildTree(node,w) {
        for (let i=0; i<w.length; i++) {
            if (!(w[i] in node.children)) {
                node.children[w[i]] = new TreeNode()
            }
            node = node.children[w[i]]
        }
        node.end = true
    }

    function dfs(x,y,node,s) {
        if (!(board[x][y] in node.children)) return
        s += board[x][y]
        if (node.children[board[x][y]].end) {
            ret.add(s)
        }
        visited[x][y]= true
        for (let d of directions) {
            let dx = x + d[0]
            let dy = y + d[1]
            if (dx<0 || dy<0 || dx>=n || dy>=m) continue
            if (visited[dx][dy]) continue
            dfs(dx,dy,node.children[board[x][y]],s)
        }
        visited[x][y] = false
        if (Object.keys(node.children[board[x][y]].children).length===0) 
            delete node.children[board[x][y]]
    }

};

console.log(findWords([["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]],["oa","oaa"]))