/**
 * @param {number[]} nums
 * @return {number[]}
 */


var countSmaller = function(nums) {
    const n = nums.length
    const ret = new Array(n).fill(0)

    const f = new Map()
    for (let i=0; i<n; i++) {
        if (f.has(nums[i])) f.set(nums[i],f.get(nums[i])+1)
            else f.set(nums[i],1)
    }
    const arr = [...f].sort((a,b)=>a[0]-b[0])
    const af = new Map()
    for (let i=0; i<arr.length; i++) 
        af.set(arr[i][0],i)

    let root = buildTree(0,arr.length-1,arr.map(v=>v[1]))
    for (let i=0; i<n; i++) {
        // arr[af.get(nums[i])][1]--
        update(root,af.get(nums[i]))
        // for (let j=af.get(nums[i])-1; j>=0; j--) {
        //     ret[i] += arr[j][1]
        // }
        ret[i] = count(root,0,af.get(nums[i])-1)
    }
    return ret


    function TreeNode(val,l,r,left,right) {
        this.val = val
        this.l = l
        this.r = r
        this.left = left
        this.right = right
    }
    function buildTree(l,r,nums) {
        if (l==r) {
            return new TreeNode(nums[l],l,r,null,null)
        }
        let m = (l+r)>>1
        let left = buildTree(l,m,nums)
        let right = buildTree(m+1,r,nums)
        return new TreeNode(left.val+right.val,l,r,left,right)
    }
    function update(node,n) {
        if (node.l==n && node.r==n) {
            node.val--
            return node.val
        }
        let ret = 0
        if (node.left) {
            if (n<=node.left.r) ret += update(node.left,n)
                else ret += node.left.val
        }
        if (node.left) {
            if (n>=node.right.l) ret += update(node.right,n)
                else ret += node.right.val
        }
        node.val = ret
        return ret
    }
    function count(node,l,r) {
        if (node==null) return 0
        if (node.l==l && node.r==r) return node.val
        let ret = 0
        if (node.left && l<=node.left.r) {
            ret += count(node.left,l,Math.min(r,node.left.r))
        }
        if (node.right && r>=node.right.l) {
            ret += count(node.right,Math.max(l,node.right.l),r)
        }
        return ret
    }
};

var countSmaller1 = function(nums) {
    const n = nums.length
    const ret = new Array(n).fill(0)
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) 
            ret[i] += (nums[j]<nums[i])
    }
    return ret
}

function check(nums1,nums2) {
    if (nums1.length!==nums2.length) return false
    for (let i=0; i<nums1.length; i++) {
        if (nums1[i]!==nums2[i]) return false
    }
    return true
}

for (let i=0; i<1000; i++) {
    let num = new Array(10).fill(0).map(()=>Math.floor(Math.random()*20))
    let nums1 = countSmaller(num)
    let nums2 = countSmaller1(num)
    if (!check(nums1,nums2)) {
        console.log('nums:',num)
        console.log('wrong:',nums1)
        console.log('answer:',nums2)
        break
    } 
}


// console.log(countSmaller([3, 12, 14, 0, 5, 7, 0, 8, 8, 4]))

// let h = new Heap((a,b)=>a>b)
// for (let i of [3, 12, 14, 0, 5, 7, 0, 8, 8, 4]) h.insert(i)
// console.log(h.heap)

// for (let i=0; i<7; i++) {
//     h.pop()
//     console.log(h.heap)
// }
