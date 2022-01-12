/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    const cmp = function(a,b) {
        if (a[0]!==b[0]) return a[0]-b[0];
        return b[1]-a[1];
    }
    people.sort(cmp)
    const n = people.length;
    let f = [];
    for (let i=0;i<n;i++) f.push(people[i][1]);
    let queue = [];
    for (let i=0;i<n;i++) {
        let j = 0;
        while (f[j]!==0) j++;
        queue.push([people[j][0],people[j][1]]);
        while (j>=0) {
            f[j]--;
            j--;
        }
    }
    return queue;
};