// const qsort = function(nums) {
//     if (nums.length === 0) return []
//     let mi = Math.floor(nums.length / 2)
//     let m = nums.splice(mi, 1)[0]
//     let l = []
//     let r = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] <= m) {
//             l.push(nums[i]);
//         } else {
//             r.push(nums[i]);
//         }
//     }
//     return [...qsort(l),m,...qsort(r)]
// }

const qsort = function(nums) {
    if (nums.length === 0) return []
    let m = nums.pop()
    let l = nums.filter((num)=>num<=m)
    let r = nums.filter((num)=>num>m)
    return [...qsort(l),m,...qsort(r)]
}

// const qsort = function(a,l,r) {
//     const m = a[(l+r)>>1];
//     let i = l;
//     let j = r;
//     while (i<=j) {
//         while (a[i]<m) i++;
//         while (m<a[j]) j--;
//         if (i<=j) {
//             let t = a[i];
//             a[i] = a[j];
//             a[j] = t;   
//             i++;
//             j--;
//         }
//     }
//     if (i<r) qsort(a,i,r);
//     if (l<j) qsort(a,l,j);
// }



const n = 10000;
let nums = new Array(n).fill(0);
for (let i=0;i<n;i++) {
    nums[i] = Math.round(Math.random()*10000);
}
console.log(nums);

// qsort(nums,0,n-1);
// console.log(nums);

console.log(qsort(nums))


