/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    let ret = "";
    for (let i=0;i<s.length;i++) {
        if (s[i]===" ") ret = ret + "%20"
            else ret = ret + s[i];
    }
    return ret;
};