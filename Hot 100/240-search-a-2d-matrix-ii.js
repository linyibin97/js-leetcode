/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    const n = matrix.length;
    const m = matrix[0].length;
    const search = function(nums,l,r) {
        while (l<=r) {
            const mid = Math.floor((l+r)/2);
            if (target===nums[mid]) return mid;
            if (target<nums[mid]) [l,r] = [l,mid-1];
            if (target>nums[mid]) [l,r] = [mid+1,r];
        }
        return -1;
    }
    for (let i=0;i<n;i++) 
        if (target>=matrix[i][0] && target<=matrix[i][m-1]) {
            let j = search(matrix[i],0,m-1);
            if (j!==-1) return true;
        }
    return false;
};