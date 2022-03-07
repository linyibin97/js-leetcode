/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let map = new Map();
    const n=nums.length;
    for (let i=0;i<n;i++) {
        if (map.has(nums[i])) map.set(nums[i],map.get(nums[i])+1);
            else map.set(nums[i],1);
        if (map.get(nums[i])>Math.floor(n/2)) return nums[i];
    }
};


var majorityElement = function(nums) {
    let candidate = 0
    let count = 0
    for (let i=0; i<nums.length; i++) {
        if (count===0) candidate = nums[i]
        if (nums[i]===candidate) count++ 
            else count--
    }
    return candidate
};