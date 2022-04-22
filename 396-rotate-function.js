var maxRotateFunction = function(nums) {
    const n = nums.length
    const sum = nums.reduce((p,c)=>p+c)
    let ksum = 0
    for (let i = 0; i < n; i++) 
        ksum += i * nums[i]
    let res = ksum
    for (let k = 1; k < n; k++) {
        ksum = ksum - n*nums[n-k] + sum
        res = Math.max(res, ksum)
    }
    return res
};