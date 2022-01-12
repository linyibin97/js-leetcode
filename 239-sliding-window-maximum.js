/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    const TreeNode = function(value,start,end) {
        this.val = value;
        this.left = null;
        this.right = null;
        this.start = start;
        this.end = end;
    }
    const buildTree = function(start,end) {
        if (start===end) return new TreeNode(nums[start],start,end);
        let mid = Math.floor((start+end)/2);
        let treenode = new TreeNode(0,start,end);
        treenode.left = buildTree(start,mid);
        treenode.right = buildTree(mid+1,end);
        treenode.val = Math.max(treenode.left.val,treenode.right.val);
        return treenode;
    }
    const query = function(node,start,end) {
        //console.log(`node:{[${node.start},${node.end}]:${node.val},query:[${start},${end}]`);
        if (start===node.start && end===node.end) return node.val;
        let mid = Math.floor((node.start+node.end)/2);
        if (end<=mid) return query(node.left,start,end);
        if (start>mid) return query(node.right,start,end);
        return Math.max(query(node.left,start,mid),query(node.right,mid+1,end));
    }
    const n=nums.length;
    let root = buildTree(0,n-1);
    let result = [];
    for (let i=0;i+k-1<n;i++)
        result.push(query(root,i,i+k-1));
    return result;
};


var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    let que = [];
    for (let i=0;i<k-1;i++) {
        while (que.length>0 && nums[i]>=nums[que[que.length-1]])
            que.pop();
        que.push(i);
    }
    let result = []
    for (let i=k-1;i<n;i++) {
        while (que.length>0 && nums[i]>=nums[que[que.length-1]])
            que.pop();
        que.push(i);
        while (que[0]<i-k+1) que.shift();
        result.push(nums[que[0]]);
    }
    return result;
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))