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

  console.log(findMedianSortedArrays([],[2]));