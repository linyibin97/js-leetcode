class SegmentTree {
    constructor(nums) {
        this.nums = nums
        this.tree = new Array(nums.length*4).fill(0)
        this.build(0,0,nums.length-1)
    }
    change(index,val) {
        this.update(0,0,this.nums.length-1,index,val)
    }
    range(left, right) {
        return this.getSum(0,0,this.nums.length-1,left,right)
    }
    build(i,l,r) {
        if (l==r) {
            this.tree[i] = this.nums[l]
            return
        }
        let m = (l+r)>>1
        this.build(i*2+1, l, m)
        this.build(i*2+2, m+1, r)
        this.tree[i] = this.tree[i*2+1] + this.tree[i*2+2]
    }
    update(i,l,r,t,v) {
        if (l==t && r==t) return this.tree[i] = v
        let m = (l+r)>>1
        if (t<=m) this.update(i*2+1, l, m, t, v)
            else this.update(i*2+2, m+1, r, t, v)
        this.tree[i] = this.tree[i*2+1] + this.tree[i*2+2]
        
    }
    getSum(i,l,r,tl,tr) {
        if (l==tl && r==tr) return this.tree[i]
        let m = (l+r)>>1
        if (tr<=m) return this.getSum(i*2+1, l, m, tl, tr)
        else if (tl>m) return this.getSum(i*2+2, m+1, r, tl, tr)
        else return (this.getSum(i*2+1, l, m, tl, m) + this.getSum(i*2+2, m+1, r, m+1, tr))
    }
}

let t = new SegmentTree([1,2,3,4,5,6,7])

console.log(t.range(0,6))
t.change(2,9)
console.log(t.range(0,1))
console.log(t.range(0,2))