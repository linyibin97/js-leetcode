/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    people.sort((a,b)=>a[0]===b[0]? b[1]-a[1] : a[0]-b[0])
    const n = people.length;
    let f = [];
    for (let i=0;i<n;i++) f.push(people[i][1]);
    let queue = [];
    for (let i=0;i<n;i++) {
        let j = 0;
        while (f[j]!==0) j++;
        queue.push(people[j]);
        while (j>=0) {
            f[j]--;
            j--;
        }
    }
    return queue;
};