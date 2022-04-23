/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    const n = trees.length
    if (n<4) return trees
    const cross = (x0, y0, x1, y1, x2, y2) => {
        return (x1-x0)*(y2-y0) - (x2-x0)*(y1-y0)
    }
    const res = []
    const visited = new Array(n).fill(false)
    let left = 0
    trees.forEach((t, i) => {
        left = t[0] < trees[left][0]? i: left
    })
    let p = left
    do {
        let q = (p + 1) % n
        for (let i = 0; i < n; i++) {
            if (cross(trees[p][0], trees[p][1], trees[q][0], trees[q][1], trees[i][0], trees[i][1]) < 0) q = i
        }
        for (let i = 0; i < n; i++) {
            if (visited[i]) continue
            if (cross(trees[p][0], trees[p][1], trees[q][0], trees[q][1], trees[i][0], trees[i][1]) == 0) {
                res.push(trees[i])
                visited[i] = true
            }
        }
        p = q
    } while (p !== left)
    return res
};


console.log(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))
// 输出: [[1,1],[2,0],[4,2],[3,3],[2,4]]