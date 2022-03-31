var getSkyline = function(buildings) {
    let nums = new Set()
    for (let b of buildings) {
        nums.add(b[0])
        nums.add(b[1])
    }
    nums = Array.from(nums).sort((a,b)=>a-b)
    let zipnums = new Map
    nums.forEach((v,i)=>zipnums.set(v,i))
    const n = nums.length
    const city = new Array(n).fill(0)
    function add(l,r,h) {
        for (let i=l; i<r; i++) {
            city[i] = Math.max(city[i], h)
        }
    }
    for (let b of buildings) {
        add(zipnums.get(b[0]),zipnums.get(b[1]),b[2])
    }
    let ret = [[nums[0],city[0]]]
    for (let i=1; i<n; i++) {
        if (city[i]!==city[i-1]) {
            ret.push([nums[i],city[i]])
        }
    }
    return ret
};