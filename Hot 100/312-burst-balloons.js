/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function(nums) {
    const n = nums.length
    const f = Array.from(new Array(n+1), ()=>new Array(n+1).fill(-1))
    f[-1] = new Array(n+1).fill(-1)
    f[-1][-1] = -1
    nums[-1] = 1
    nums[n] = 1
    return dfs(-1,n)
    function dfs(l,r) {
        if (f[l][r]!==-1) return f[l][r]
        f[l][r] = 0
        for (let i=l+1; i<r; i++) {
            f[l][r] = Math.max(f[l][r], nums[l]*nums[i]*nums[r] + dfs(l,i) + dfs(i,r))
        }
        return f[l][r]
    }
};

var maxCoins = function(nums) {
    const n = nums.length
    const f = Array.from(new Array(n+1), ()=>new Array(n+1).fill(0))
    f[-1] = new Array(n+1).fill(0)
    f[-1][-1] = -1
    nums[-1] = 1
    nums[n] = 1
 
    for (let i=n; i>=-1; i--) {
        for (let j=i+2; j<=n; j++) {
            for (let k=i+1; k<j; k++) {
                f[i][j] = Math.max(f[i][j], nums[i]*nums[k]*nums[j] + f[i][k] + f[k][j])
            }
        }
    }
    
    return f[-1][n]
};