/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    const n = nums.length;
    const count = function (m) {
        let ml = 0;
        let me = 0;
        for (i=0;i<n;i++) {
            ml += nums[i]<m;
            me += nums[i]===m;
        }
        if (me<2) return ml; else return -1;
    }
    let l = 1;
    let r = n-1;
    while (l<=r) {
        let m = Math.floor((l+r) / 2);
        let ml = count(m);
        if (ml === -1) return m;
        if (ml>=m) r = m-1;
            else l = m+1;
    }
    return (l);
};