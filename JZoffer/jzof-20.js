/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
    const isInterger = function(s,f,c) {
        if (s.length===0) return false;
        for (let i=0;i<s.length;i++)
            if (s[i].charCodeAt()>'9'.charCodeAt() || s[i].charCodeAt()<'0'.charCodeAt())
                return false;
        return true;
    }
    const abs = function(s) {
        if (s[0]==='-'||s[0]==='+') return s.slice(1,s.length); 
        return s;
    }
    let l = 0;
    let r = s.length;
    while (l<r && s[l]===' ') l++;
    while (r>l && s[r-1]===' ') r--;
    s = s.slice(l,r);
    if (s.length===0) return false;
    let point = s.indexOf('.');
    let e = s.indexOf('e');
    if (e===-1) e = s.indexOf('E');
    if (e!==-1 && point!==-1) {
        let s1 = abs(s.slice(0,point));
        let s2 = s.slice(point+1,e);
        let s3 = abs(s.slice(e+1,s.length));
        let f1 = isInterger(s1);
        let f2 = isInterger(s2);
        let f3 = isInterger(s3);
        if (!f3) return false;
        if (s1.length===0) return f2;
        if (s2.length===0) return f1;
        return f1&&f2;
    }
    if (e!==-1 && point===-1) {
        let s1 = abs(s.slice(0,e));
        let s2 = abs(s.slice(e+1,s.length));
        let f1 = isInterger(s1);
        let f2 = isInterger(s2);
        return f1&&f2;
    }
    if (e===-1 && point!==-1) {
        let s1 = abs(s.slice(0,point));
        let s2 = s.slice(point+1,s.length);
        let f1 = isInterger(s1);
        let f2 = isInterger(s2);
        if (s1.length===0) return f2;
        if (s2.length===0) return f1;
        return f1&&f2;
    }
    if (e===-1 && point===-1) {
        return  isInterger(abs(s));
    }
};