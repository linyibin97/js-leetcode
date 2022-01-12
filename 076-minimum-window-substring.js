/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let count = {};
    let map = {};
    let f = {};
    for (let i=0;i<t.length;i++)
        if (!(t[i] in count)) count[t[i]] = 1; else count[t[i]]++;
    for (let i=0;i<s.length;i++) {
        if (s[i] in count) {
            if (!(s[i] in map)) map[s[i]]=[i]; else map[s[i]].push(i);
        }
    }
    for (let k in count) {
        if (!(k in map) || map[k].length<count[k]) return "";
    }
    
    let resultl = 0;
    let resultr = s.length-1;
    const dfs = function (q) {
        if (q.length===t.length) {
            l = Math.min(...q);
            r = Math.max(...q);
            if ((r-l)<(resultr-resultl)) [resultl,resultr] = [l,r];
            return;
        }
        for (let k in count) 
            if (count[k]>0) {
                for (let i=0;i<map[k].length;i++){
                    if (map[k][i]>-1) {
                        count[k]--;
                        q.push(map[k][i]);
                        map[k][i] = -1;
                        dfs(q);
                        map[k][i] = q.pop();
                        count[k]++;
                    }
                }
            }
    }
    dfs([]);
    return s.slice(resultl,resultr+1);
};

var minWindow = function(s, t) {
    let need = {};
    for (let i=0;i<t.length;i++)
        if (!(t[i] in need)) need[t[i]] = 1; else need[t[i]]++;
    let j = 0;
    let l = -1;
    let r = s.length;

    const hadall = function () {
        for (let k in need) 
            if (need[k]>0) return false;
        return true;
    }

    for (let i=0;i<s.length;i++) {
        while (!hadall() && j<s.length) {
            if (s[j] in need) need[s[j]]--;
            j++;
        }
        if (hadall()&&((j-i)<(r-l))) [l,r]=[i,j];
        if (s[i] in need) need[s[i]]++;
    }
    if (l===-1) return ''; else return s.slice(l,r);
};

console.log(minWindow("ADOBECODEBANC","ABC"));