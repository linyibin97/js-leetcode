/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let f = new Array(nums.length).fill(-Infinity);
    f[0]=nums[0];
    let result = f[0];
    for (let i=1;i<nums.length;i++) {
      f[i] = Math.max(nums[i],f[i-1]+nums[i]);
      result = Math.max(result,f[i]);
    }
    return result;
  };


var maxSubArray = function(nums) {
    // iSum区间和 
    // mSum最大子区间和
    // lSum包含左节点的最大子区间和
    // rSum包含右节点的最大子区间和
    function Status(iSum,mSum,lSum,rSum) {
        this.iSum = iSum
        this.mSum = mSum
        this.lSum = lSum
        this.rSum = rSum
    }
    function pushUp(l,r) {
        return new Status(
            l.iSum + r.iSum,
            Math.max(Math.max(l.mSum,r.mSum),l.rSum+r.lSum),
            Math.max(l.lSum,l.iSum+r.lSum),
            Math.max(r.rSum,r.iSum+l.rSum)
        )
    }
    function getInfo(l,r) {
        if (l===r) return new Status(nums[l],nums[l],nums[l],nums[l])
        let m = (l+r)>>1
        let lSub = getInfo(l,m)
        let rSub = getInfo(m+1,r)
        return pushUp(lSub,rSub)
    }
    return getInfo(0,nums.length-1).mSum
};