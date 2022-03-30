/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    const n = heights.length;
    let l = 0;
    let r = 0;
    let result = 0;
    for (let i=0;i<n;i++) {
        if (i>0 && heights[i]===heights[i-1]) continue;
        l = i;
        r = i;
        while (l-1>=0 && heights[l-1]>=heights[i]) l--;
        while (r+1<n && heights[r+1]>=heights[i]) r++;
        result = Math.max(result,(r-l+1)*heights[i]);
    }
    return result;
};

var largestRectangleArea = function(heights) {
    const n = heights.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let stack = [];
    for (let i=0;i<n;i++) {
        while (stack.length>0 && heights[stack[stack.length-1]]>=heights[i])    
            stack.pop();
        if (stack.length>0) left[i] = stack[stack.length-1]; else left[i]=-1;
        stack.push(i);
    }
    stack = [];
    for (let i=n-1;i>=0;i--) {
        while (stack.length>0 && heights[stack[stack.length-1]]>=heights[i]) 
            stack.pop();
        if (stack.length>0) right[i] = stack[stack.length-1]; else right[i]=n;
        stack.push(i);
    }
    let result = 0;
    for (let i=0;i<n;i++) {
        result = Math.max(result,(right[i]-left[i]-1)*heights[i]);
    }
    return result;
};