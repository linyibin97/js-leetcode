/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let i = 0
    for (let j=0; j<nums.length; j++) {
        if ((nums[j] & 1) == 0) {
            let t = nums[i]
            nums[i] = nums[j]
            nums[j] = t
            i++
        }
    }
    return nums
};