const qsort = function(a,l,r) {
    const m = a[Math.floor((l+r)/2)];
    let i = l;
    let j = r;
    while (i<=j) {
        while (a[i]<m) i++;
        while (m<a[j]) j--;
        if (i<=j) {
            let t = a[i];
            a[i] = a[j];
            a[j] = t;   
            i++;
            j--;
        }
    }
    if (i<r) qsort(a,i,r);
    if (l<j) qsort(a,l,j);
}

const n = 10;
let nums = new Array(n).fill(0);
for (let i=0;i<n;i++) {
    nums[i] = Math.round(Math.random()*100);
}
console.log(nums);
qsort(nums,0,n-1);
console.log(nums);

