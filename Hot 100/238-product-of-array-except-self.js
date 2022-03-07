/**
 * @param {number[]} nums
 * @return {number[]}
 */
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

var productExceptSelf = function(nums) {
    const n = nums.length
    const ret = new Array(n).fill(0)
    for (let i=0; i<n; i++) {
        ret[i] = i===0? 1 : nums[i-1]*ret[i-1]
    }
    for (let i=n-1; i>=0; i--) {
        nums[i] = i===n-1? nums[i] : nums[i]*nums[i+1]
        ret[i] = i===n-1? ret[i] : ret[i]*nums[i+1]
    }
    return ret
};