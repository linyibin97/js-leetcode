/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    const n = nums.length;
    let j=0;
    while (j<n) {
        if ((nums[j]&1)===0) break;
        j++;
    }
    for (let i=0;i<n;i++) {
        if ((nums[i]&1)===1) {
            if (i>j) {
                let t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
                while (j<n) {
                    if ((nums[j]&1)===0) break;
                    j++;
                }
            }
        }
    }
    return nums;
};


var exchange = function(nums) {
    let i = 0;
    let j = nums.length-1;
    while (i<j) {
        while (i<nums.length) {
            if ((nums[i]&1)===0) break;
            i++;
        }
        while (j>=0) {
            if ((nums[j]&1)===1) break;
            j--;
        }
        if (i<j) {
            let t = nums[i];
            nums[i] = nums[j];
            nums[j] = t;
        }
    }
    return nums;
};