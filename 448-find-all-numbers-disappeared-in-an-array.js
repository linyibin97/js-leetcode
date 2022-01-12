/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const n = nums.length
    let ret = [];
    for (let i=1;i<=n;i++) ret.push(i);
    for (let i=0;i<n;i++) ret[nums[i]-1]=0;
    let i = 0, j = 0;
    while (j<n) {
        if (ret[j]!==0) {
            [ret[j], ret[i]] = [ret[i], ret[j]];
            i++;
        }
        j++;
    }
    ret = ret.slice(0,i);
    return ret;
};

var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    let ret = [];
    for (let i=0;i<n;i++) 
        nums[(nums[i]-1)%n] += n;
    for (let i=0;i<n;i++)
        if (nums[i]<=n) ret.push(i+1);
    return ret;
};