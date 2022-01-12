/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let map = {};
    for (let [x,y] of prerequisites)
        if (!map[x]) map[x] = [y]; else map[x].push(y);
    console.log(map);
    let visited = new Set();
    let checked = new Set();
    let result = true;
    const dfs = function(x) {
        if (checked.has(x)) return;
        if (!map[x]) 
            {
                checked.add(x);
                return;
            };
        visited.add(x);
        for (let y of map[x]) {
            if (visited.has(y)) 
                {
                    result = false;
                    return;
                }
            dfs(y);
        }
        visited.delete(x);
        checked.add(x);
    }
    for (let i in map) {
        let x = Number(i);
        dfs(x);
    }
    return result;
}
//递归判断有向无环图