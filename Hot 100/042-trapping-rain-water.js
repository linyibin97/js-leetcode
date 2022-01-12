/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    const n = height.length;
    let result = 0;
    let maxl = new Array(n).fill(0);
    let maxr = new Array(n).fill(0);
    maxl[0] = height[0];
    maxr[n-1] = height[n-1];
    for (let i=1;i<n-1;i++) {
      maxl[i] = Math.max(maxl[i-1],height[i]);
      maxr[n-i-1] = Math.max(maxr[n-i],height[n-i-1]);
    }
    for (let i=1;i<n-1;i++) {
      let minmax = Math.min(maxl[i],maxr[i]);
      if (minmax>height[i]) result+=minmax-height[i];
    }
    return result;
  };