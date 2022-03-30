/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let map = {}
    for (let [x,y] of prerequisites) 
        if (y in map) map[y].push(x) 
            else map[y] = [x]
    let visited = new Set()
    let checked = new Set()
    let res = true
    const dfs = function(x) {
        if (checked.has(x)) return
            else checked.add(x)
        if (!(x in map)) return
        visited.add(x)
        for (let y of map[x]) {
            if (visited.has(y)) {
                return res = false
            } else 
            dfs(y)
        }
        visited.delete(x)
    }
    for (let x in map) {
        dfs(Number(x))
    }
    return res
};
//递归判断有向无环图