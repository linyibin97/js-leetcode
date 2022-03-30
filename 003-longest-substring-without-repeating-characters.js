// 滑动窗口
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let j = 0;
    let map = {};
    const n = s.length;
    for (let i=0;i<n;i++) {
      map[s[i]] = true;
      if (j<i) j=i;
      while (j+1<n && !(s[j+1] in map)) {
        j++;
        map[s[j]] = true;
      }
      delete map[s[i]];
      let count = j-i+1;
      if (count>result) result=count;
    }
    return result;
  };

var lengthOfLongestSubstring = function(s) {
    let f = new Set()
    let l = 0
    let ret = 0
    for (let i = 0; i < s.length; i++) {
        while (f.has(s[i])) {
            f.delete(s[l])
            l++
        }
        f.add(s[i])
        ret = Math.max(ret, i-l+1)
    }
    return ret
};

var lengthOfLongestSubstring = function(s) {
    let f = new Map()
    let l = 0
    let ret = 0
    for (let i = 0; i < s.length; i++) {
        if (f.has(s[i])) {
            let li = f.get(s[i])
            for (let [k,v] of f) 
                if (v < li) f.delete(k)
            l = i - li
            f.set(s[i],i)
        } else {
            l++
            f.set(s[i],i)
        }
        ret = Math.max(ret, l)
    }
    return ret
};