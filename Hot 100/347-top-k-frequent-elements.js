/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    nums.sort();
    let i = 0;
    let count = new Map();
    const n = nums.length;
    for (let i=0;i<n;i++)
        if (count.has(nums[i])) count.set(nums[i],count.get(nums[i])+1)
            else count.set(nums[i],1);
    let countarray = [];
    for (let [k,v] of count.entries())
        countarray.push([k,v]);
    countarray.sort((a,b)=>a[1]-b[1]);
    let result = [];
    while (k>0) {
        result.push(countarray.pop()[0]);
        k--;
    }
    return result;
};


var topKFrequent = function(nums, k) {
    let f = new Map()
    for (let i of nums) {
        if (f.has(i)) f.set(i,f.get(i)+1)
            else f.set(i,1)
    }
    return [...f].sort((a,b)=>b[1]-a[1]).map((v)=>v[0]).slice(0,k)
};