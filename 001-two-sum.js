/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /** O(n^2)
    let n = nums.length;
    for (let i=0;i<n;i++) {
        for (let j=i+1;j<n;j++) {
            if (nums[i]+nums[j]===target) {
                return([i, j])
            }
        }
    }
    */
   let n = nums.length;
   let map = {};
   for (let i=0;i<n;i++) {
       if (map[target-nums[i]]!==undefined) {
            return([map[target-nums[i]],i])
       }
       else {
           map[nums[i]] = i;
       }
   }
};
