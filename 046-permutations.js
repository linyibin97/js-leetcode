/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result=[];
    let f = new Array(nums.length).fill(false);
    const dfs=function(s) {
      if (s.length===nums.length) {
        result.push(s.slice());
        return;
      }
      for (let i=0;i<nums.length;i++) {
        if (!f[i]) {
          s.push(nums[i]);
          f[i] = true;
          dfs(s);
          f[i] = false;
          s.pop();
        }
      }
    }
    dfs([]);
    return result;
  };