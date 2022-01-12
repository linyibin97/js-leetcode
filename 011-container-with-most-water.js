/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let result = 0;
    let l = 0;
    let r = height.length-1;
    const compute = (i,j) => Math.abs(i-j)*Math.min(height[i],height[j]);
    while (l<r) {
      result = Math.max(result,compute(l,r));
      if (height[l]<height[r]) l++; else r--;
    }
    return result;
  };

  console.log(maxArea([1,8,6,2,5,4,8,3,7]));