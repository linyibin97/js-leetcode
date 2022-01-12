/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let map = {};
    let k = '';
    for (let i=0;i<strs.length;i++) {
      k = [...strs[i]].sort().join('');
      if (k in map) map[k].push(strs[i]); else map[k] = [strs[i]];
    }
    let result = [];
    for (let i in map) result.push(map[i]);
    return result;
  };