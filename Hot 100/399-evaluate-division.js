/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
 var calcEquation = function(equations, values, queries) {
    let l = 0;
    let map = new Map();
    for (let i=0;i<equations.length;i++) 
        for (let j of equations[i]) 
            if (!map.has(j)) {
                map.set(j,l);
                l++;
            }
    let fa = new Array(l).fill(0);
    let val = new Array(l).fill(0);
    for (let i=0;i<l;i++) {
        fa[i] = i;
        val[i] = 1;
    }
    const find = function(x) {
        if (fa[x]===x) return x;
        let fax = find(fa[x]);        
        val[x] = val[x]*val[fa[x]];
        fa[x] = fax;
        return fa[x];
    }
    const count= function(s,f) {
        let t = 1;
        while (s!==f) {
            t = t * val[s];
            s = fa[s];
        }
        return t;
    }
    const merge = function(x,y,v) {
        let fx = find(x);
        let fy = find(y);
        fa[fx] = fy;
        let vx = count(x,fx);
        let vy = count(y,fy);
        val[fx] = vy/vx*v;
    }
    

    for (let i=0;i<equations.length;i++){
        merge(map.get(equations[i][0]),map.get(equations[i][1]),values[i]);
    }

    let result = [];
    for (let i=0;i<queries.length;i++) {
        let x = -1, y = -1;
        if (map.has(queries[i][0])) x = map.get(queries[i][0]);
        if (map.has(queries[i][1])) y = map.get(queries[i][1]);
        if (x===-1 || y===-1) result.push(-1) 
            else {
                let fx = find(x);
                if (fx===find(y)) {
                    vx = count(x,fx);
                    vy = count(y,fx);
                    result.push(vx/vy);
                }   else result.push(-1);
                    
            }
    }
    return result;
};