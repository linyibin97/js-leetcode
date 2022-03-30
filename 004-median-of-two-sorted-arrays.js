var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    const even = ((m+n)%2) === 0;
    let i = 0;
    let j = 0;
    let count = 0;
    let lastval = 0;
    let val = 0;
    while (true) {
      if ((j>=n)||(nums1[i]<=nums2[j])) {
        val = nums1[i];
        i++;
      } else 
      if ((i>=m)||(nums1[i]>nums2[j])) {
        val = nums2[j];
        j++;
      }
      count++;
      if (even && (count === (m+n)/2+1)) return (lastval+val)/2;
      if (!even && (count === Math.ceil((m+n)/2))) return val;
      lastval = val;
    }
  };

  var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length
    const n = nums2.length
    let p = ((m + n) >> 1) + ((m + n)& 1) //Math.ceil((m+n)/2)
    let i = 0
    let j = 0
    let r = 0
    while (p>0) {
        if (i<m && j<n) {
            if (nums1[i]<nums2[j]) {
                r = nums1[i]
                i++
            } else {
                r = nums2[j]
                j++
            }
        } else if (i<m) {
            r = nums1[i]
            i++
        } else if (j<n) {
            r = nums2[j]
            j++
        }
        p--  
    }
    if (((m + n)& 1)===0) 
        r = (r + Math.min(i<m?nums1[i]:Infinity,j<n?nums2[j]:Infinity))/2
    return r
};