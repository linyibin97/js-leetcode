/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    let result = [];
    let l = 0;
    let r = 0;
    const exist = function (a) {
      for (let i=0;i<result.length;i++) 
        if (a[0]===result[i][0]&&a[1]===result[i][1]&&a[2]===result[i][2]) return true;
      return false;
    }
    nums.sort((a, b) => a - b);
    for (let i=1; i<n-1; i++){
      l = i-1;
      r = i+1;
      while(l>=0 && r<n) {
        if (nums[l]+nums[i]+nums[r] === 0) {
          if (!exist([nums[l],nums[i],nums[r]])) result.push([nums[l],nums[i],nums[r]]);
        }
        if (nums[l]+nums[i]+nums[r]>0) l--; else r++;
      }
    }
    return result;
  };
  console.log(threeSum([-1,0,1,2,-1,-4]));


  var threeSum = function(nums) {
    let n = nums.length
    let ret = []
    nums.sort((a,b)=>a-b)
    for (let i=0; i<n-2; i++) {
        if (nums[i]>0) continue
        if (i>0 && nums[i]===nums[i-1]) continue
        let l = i + 1
        let r = n - 1
        while (l<r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                ret.push([nums[i],nums[l],nums[r]])
                while (l<r && nums[l]===nums[l+1]) l++
                while (l<r && nums[r]===nums[r-1]) r--
                l++
                r--    
            } else if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            }
        }
    }
    return ret
};