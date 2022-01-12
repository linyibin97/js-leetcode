/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    const n = nums.length;
    let f = new Array(n).fill(0);
    const maxm=function(l,r) {
        let max = -Infinity;
        f[l-1] = 1;
        for (let i=l;i<r;i++) f[i]=f[i-1]*nums[i];
        for (let i=l;i<r;i++) {
            max = Math.max(max,nums[i]);
            if (nums[i]===1) continue;
            for (let j=l;j<i;j++)
                max = Math.max(max,f[i]/f[j-1]);
            }
        return max;
    }
    let i = 0;
    while (i<n && nums[i]==0) i++;
    let j = i+1;
    let result = Math.max(...nums);
    while (i<n) {
        while (j<n && nums[j]!==0) j++;
        result = Math.max(result,maxm(i,j));
        i = j + 1;
        while (i<n && nums[i]==0) i++;
        j = i + 1;
    }
    return result;
};
// 超时

var maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        [max,min] = [Math.max(nums[i],nums[i]*min,nums[i]*max),Math.min(nums[i],nums[i]*min,nums[i]*max)]
        result = Math.max(result,max);
    }
    return result;
};
//dp
