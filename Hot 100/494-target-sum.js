/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((prev,curr)=>prev+curr);
    if (target>sum || target<-sum) return 0;
    const n = nums.length;
    let f = Array.from(new Array(n+1), ()=>new Array(2*sum+1).fill(0));
    f[0][sum] = 1;
    for (let i=1;i<=n;i++) {
        for (let j=-sum;j<=sum;j++) {
            if (j-nums[i-1]>=-sum) f[i][j+sum] += f[i-1][j-nums[i-1]+sum];
            if (j+nums[i-1]<=sum) f[i][j+sum] += f[i-1][j+nums[i-1]+sum];
        }
    }
    return(f[n][target+sum]);
};