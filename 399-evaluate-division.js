/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    //给每个变量编号
    let l = 0
    let f = new Map()
    for (let i of equations)
        for (let j of i) 
            if (!f.has(j)) {
                f.set(j,l)
                l++
            }
    
    let fa = new Array(l).fill(0)
    let va = new Array(l).fill(1)
    fa.forEach((_,i)=>fa[i]=i)
    equations.forEach(([ai,bi],i) => {
        merge(f.get(ai),f.get(bi),values[i])
    })
    let result = []
    queries.forEach(([ai,bi])=>{
        let x = f.has(ai) ? f.get(ai) : -1
        let y = f.has(bi) ? f.get(bi) : -1
        if (x===-1 || y===-1) {
            result.push(-1)
        } else {
            let fx = find(x)
            let fy = find(y)
            if (fx===fy) {
                result.push(va[x]/va[y])
            } else {
                result.push(-1)
            }
        }
    })
    return result

    function find(x) {
        if (fa[x]===x) return x
        let fax = find(fa[x])
        va[x] = va[x]*va[fa[x]]
        fa[x] = fax
        return fa[x]
    }
    function merge(x,y,v) {
        let fx = find(x)
        let fy = find(y)
        fa[fx] = fy
        va[fx] = va[y] / va[x] * v
    }
};