/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const n = nums.length;
    let all = 1;
    let zeroscount = 0;
    for (let i=0;i<n;i++) 
        if (nums[i]!==0) all=all*nums[i];
            else zeroscount++;
    if (zeroscount>=2) all = 0;
    let result = [];
    for (let i=0;i<n;i++)
        if (nums[i]===0) result.push(all)
            else if (zeroscount>0) {
                result.push(0);
            } else result.push(all/nums[i]);
    return result;
};

var productExceptSelf = function(nums) {
    const n = nums.length;
    let l = new Array(n).fill(0);
    l[-1] = 1;
    let r = new Array(n).fill(0);
    r[n] = 1;
    for (let i=0;i<n;i++) {
        l[i]=nums[i]*l[i-1];
        r[n-i-1]=nums[n-i-1]*r[n-i];
    }
    let result = new Array(n).fill(0);
    for (let i=0;i<n;i++) result[i]=l[i-1]*r[i+1];
    return result;
};