/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const n = nums.length;
    let p1 = 0;
    let p2 = n-1;
    for (let i=0;i<=p2;i++) {
        while (i<=p2 && nums[i] === 2) {
            [nums[i],nums[p2]] = [nums[p2],nums[i]];
            p2--;
        }
        if (nums[i] === 0) {
            [nums[i],nums[p1]] = [nums[p1],nums[i]];
            p1++;
        }
    }
};

sortColors([1,2,0]);