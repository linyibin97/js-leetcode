/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let result = [];
    let map = {};
    for (let i=0;i<candidates.length;i++) map[candidates[i]]=true;
    const dfs=function(s,t,k) {
      if (t===0) {
        result.push(s.slice());
        return;
      }
      for (let i=k;i<candidates.length;i++) 
        if (t>=candidates[i]) {
          s.push(candidates[i]);
          dfs(s,t-candidates[i],i);
          s.pop();
        }
    }
    dfs([],target,0);
    return result;
  };