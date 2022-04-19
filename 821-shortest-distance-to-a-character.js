/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    const left = new Array(s.length).fill(Infinity)
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) left[i] = 0
            else (i > 0) && (left[i] = left[i-1] + 1)
    }
    const ret = new Array(s.length).fill(0)
    let right = Infinity
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == c) {
            ret[i] = 0
            right = 0
        } else {
            (i<s.length) && (right += 1)
            ret[i] = Math.min(left[i], right)
        }
    }
    return ret
};