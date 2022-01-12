/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result = [];
    let f = new Array(nums.length).fill(true);
    const dfs = function(m,s) {
        result.push(m.slice());
        for (let i=s;i<nums.length;i++) 
            if (f[i]) {
                m.push(nums[i]);
                f[i] = false;
                dfs(m,i+1);
                f[i] = true;
                m.pop();
        }
    }
    dfs([],0)
    return result;
};