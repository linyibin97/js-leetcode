/**
 * @param {string} s
 * @return {string[]}
 */
 var removeInvalidParentheses = function(s) {
    let result = [];

    const check = function(s) {
        let l = 0;
        for (let i=0;i<s.length;i++) {
            if (s[i]==='(') l++;
            if (s[i]===')') l--;
            if (l<0) return false;
        }
        return !(l>0);
    }
    const kick = function(s,i) {
        return s.slice(0,i) + s.slice(i+1,s.length);
    }
    const bfs = function(str) {
        let queue = new Set();
        queue.add(str)
        while (queue.size>0) {
            let nextqueue = new Set();
            if (result.length>0) return;
            for (let s of queue) {
                if (check(s)) {
                    result.push(s);
                    continue;
                }
                for (let i=0;i<s.length;i++) 
                    if (s[i]==='(' || s[i]===')') nextqueue.add(kick(s,i));
            }
            queue = nextqueue;
        }
    }

    let i = 0;
    while (i<s.length) {
        if (s[i]==="(") break; 
        if (s[i]===")") s = kick(s,i);
            else i++;
    }
    i = s.length;
    while (i>=0) {
        if (s[i]===")") break; 
        if (s[i]==="(") s = s.slice(0,i) + s.slice(i+1,s.length);
            else i--;
    }
    
    bfs(s);
    return(result);
};






/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let rmLeft = 0, rmRight = 0
    for (let c of s) {
        if (c==='(') {
            rmLeft++ 
        } else if (c===')') {
            if (rmLeft>0) rmLeft--
                else rmRight++
        }
    }
    const f = new Set()
    let ret = []
    dfs(s,rmLeft,rmRight)
    return ret
    
    function check(s) {
        let l = 0
        for (let c of s) {
            if (c==='(') {
                l++
            } else if (c===')') {
                if (l>0) l--
                    else return false
            }
        }
        return l===0
    }
    function kick(s,i) {
        return s.slice(0,i)+s.slice(i+1)
    }
    function dfs(s,l,r) {
        if (f.has(s)) return
        f.add(s)
        if ( l + r ===0) {
            if (check(s)) ret.push(s)
            return
        }
        if (l>0) {
            for (let i=0; i<s.length; i++) {
                if (s[i]==='(') 
                    dfs(kick(s,i),l-1,r)
            }
        }
        if (r>0) {
            for (let i=0; i<s.length; i++) {
                if (s[i]===')')
                    dfs(kick(s,i),l,r-1)
            }
        }
    }
};