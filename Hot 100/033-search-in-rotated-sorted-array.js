/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const n = nums.length;
    let k = 0;
    const find = function (l,r) {
      if (nums[l]===target) return l;
      if (l>=r) return -1
      let mid = Math.floor((l+r)/2);
      if (nums[mid]<target) return find(mid+1,r); else return find(l,mid);
    }
    while (k<n-1) {
      if (nums[k]>nums[k+1]) break;
      k++;
    }
    let result = -1;
    result = find(0,k);
    if (result===-1) result = find(k+1,n);
    return result;
  };

  var search = function(nums, target) {
    const n = nums.length
    const find = function (l,r) {
        if (l>r) return -1
        let mid = (l+r) >> 1;
        console.log(l,r,mid)
        if (target===nums[mid]) return mid
        if (nums[l]<=nums[mid]) {
            if (nums[l]<=target && target<nums[mid]) {
                return find(l,mid-1)
            } else {
                return find(mid+1,r)
            }
        } else {
            if (nums[mid]<target && target<=nums[r]) {
                return find(mid+1,r)
            } else {
                return find(l,mid-1)
            }
        }
    }
    return find(0,n-1)
};