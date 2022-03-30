/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    if (nums.length===1) return;
    if (nums.length===2) {
      [nums[0],nums[1]] = [nums[1],nums[0]]
      return;
    }
    const n = nums.length;
    const sort = function(l,r) {
        for (let i=l;i<r;i++) {
            let k = i;
            for (let j=i+1;j<r;j++) {
                if (nums[j]<nums[k]) k=j;
            }
            [nums[i],nums[k]] = [nums[k],nums[i]];
        }
    }
    let i = 1;
    while (i<n && (nums[n-i]<=nums[n-(i+1)])) i++;
    if (i===n) {
        nums.sort((a,b)=>a-b);
        return;
    }
    let k = n-i;
    for (let j=n-i;j<n;j++) 
        if (nums[j]>nums[n-i-1] && nums[j]<nums[k]) k=j;
    [nums[n-i-1],nums[k]] = [nums[k],nums[n-i-1]];
    sort(n-i,n);
  };

  nums = [1,3,2,1];
  nextPermutation(nums);
  console.log(nums);