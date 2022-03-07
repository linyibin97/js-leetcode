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

// var twoSum = function(nums, target) {
//     const n = nums.length
//     let f = new Map()
//     for (let i = 0; i < n; i++) {
//         if (f.has(target-nums[i])) {
//             return [f.get(target-nums[i]),i]
//         } else {
//             f.set(nums[i],i)
//         }
//     }
// };

// 对于nums中的每个nums[i]寻找哈希表中的target-nums[i]，存在即表示两者和为target