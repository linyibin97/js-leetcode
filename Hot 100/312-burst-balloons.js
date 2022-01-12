/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {
    const n = nums.length;
    let s= '';
    for (let i=0;i<n;i++) s = s + String.fromCharCode(nums[i]);
    let f = new Set();
    let result = 0;

    const dfs = function(s,sum) {
        if (f.has(s)) return;
        if (s.length===0) {
            result = Math.max(result,sum);
            return;
        }
        for (let i=0;i<s.length;i++) {
            let t = s[i].charCodeAt();
            if (i-1>=0) t*=s[i-1].charCodeAt();
            if (i+1<s.length) t*=s[i+1].charCodeAt();
            dfs(s.slice(0,i)+s.slice(i+1,s.length),sum+t)
        }
    }
    dfs(s,0);
    return result;
};

var maxCoins = function(nums) {
    const n = nums.length;
    let f = Array.from(new Array(n+1), ()=>new Array(n+1).fill(-1));
    f[-1] = new Array(n+1).fill(-1);
    f[-1][-1] = -1;
    nums[-1] = 1;
    nums[n] = 1;
    const dfs = function(l,r) {
        if (l>=r-1) return 0;
        if (f[l][r]!==-1) return f[l][r];
        for (let i=l+1;i<r;i++) {
            let t = nums[l]*nums[i]*nums[r] + dfs(l,i) + dfs(i,r)
            f[l][r] = Math.max(f[l][r],t);
        }
        return f[l][r];
    }
    return dfs(-1,n); 
};