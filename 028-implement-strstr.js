var strStr = function(haystack, needle) { 
    function kmp(str,pattern) {
        const n = str.length
        const m = pattern.length
        if (m==0) return 0
        const next = new Array(m).fill(0)
        let j = 0
        for (let i=1; i<m; i++) {
            while (j>0 && pattern[i]!==pattern[j]) {
                j = next[j-1]
            }
            if (pattern[i]==pattern[j]) {
                j++
            }
            next[i] = j
        }
        // console.log(next)
        j = 0
        for (let i=0; i<n; i++) {
            while (j>0 && pattern[j]!==str[i]) {
                j = next[j-1]
            }
            if (pattern[j]==str[i]) j++
            if (j==m) return i-m+1
        }
        return -1
    }
    kmp(haystack,needle)
};

strStr("hello","ll")