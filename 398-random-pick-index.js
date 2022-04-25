/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = {}
    nums.forEach((num, i)=>{
        if (this.map[num]) this.map[num].push(i)
            else this.map[num] = [i]
    })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    return this.map[target][Math.floor(Math.random()*this.map[target].length)]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */