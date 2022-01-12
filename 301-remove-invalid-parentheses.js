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