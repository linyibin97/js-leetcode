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

console.log(lengthOfLongestSubstring("pwwkew"));