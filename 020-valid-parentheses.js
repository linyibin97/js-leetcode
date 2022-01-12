/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let c = '';
    const left = new Set(['(','{','[']);
    for (let i=0;i<s.length;i++) {
        if (left.has(s[i])) stack.push(s[i]);
        else {
            c = stack.pop();
            if (s[i]===')' && c!=='(') return false;
            if (s[i]==='}' && c!=='{') return false;
            if (s[i]===']' && c!=='[') return false;
        }
    }
    if (stack.length>0) return false;
    return true;
}