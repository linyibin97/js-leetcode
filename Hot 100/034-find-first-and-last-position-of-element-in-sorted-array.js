/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    const n = nums.length
    const find = function (l,r) {
        if (nums[l]===target) return l;
        if (l>=r) return -1
        let mid = Math.floor((l+r)/2);
        if (nums[mid]<target) return find(mid+1,r); else return find(l,mid);
      }
    let l = find(0,n-1);
    if (l===-1) return [-1,-1];
    let r = l;
    while (l>0 && nums[l-1]===nums[l]) l--;
    while (r<n-1 && nums[r+1]===nums[r]) r++;
    return [l,r];
  };

  console.log(searchRange([5,7,7,8,8,10],8))