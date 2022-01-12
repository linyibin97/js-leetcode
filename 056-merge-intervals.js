/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let result = [];
    intervals.sort((a,b)=>a[0]-b[0]);
    while (intervals.length>0) {
        i = intervals.shift();
        if (intervals.length===0) {
            result.push(i);
            return result;
        }
        let l = i[0];
        let r = i[1];
        while (intervals.length>0 && r>=intervals[0][0]) {
            r=Math.max(r,intervals[0][1]);
            intervals.shift();
        }
        result.push([l,r]);
    }
    return result;
};

console.log(merge([[1,4],[4,5]]))