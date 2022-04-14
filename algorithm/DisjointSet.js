function find(fa,x) {
    if (fa[x]===x) return x
    fa[x]=find(fa,fa[x])
    return fa[x]
}
function merge(fa,x,y) {
    let fx = find(fa,x)
    let fy = find(fa,y)
    fa[fx] = fy
}
let n = 5
const fa1 = new Array(n).fill(0)
const fa2 = new Array(n).fill(0)

fa1.forEach((_,i)=>fa1[i]=i)
fa2.forEach((_,i)=>fa2[i]=i)

let inp = [[1,3],[2,1],[3,2],[3,5],[4,5],[5,4]]
for (let [x,y] of inp) {
    merge(fa1,x-1,y-1)
    merge(fa2,y-1,x-1)
}
console.log(fa1)
console.log(fa2)
let res = 0
for (let i=0; i<n; i++) {
    for (let j=i+1; j<n; j++) {
        console.log(i,j)
        if (find(fa1,i)===find(fa1,j) && find(fa2,i)===find(fa2,j)) {
            console.log('fa1:',find(fa1,i),'fa2:',find(fa2,j))
            res++
        }
    }
}
console.log(res)