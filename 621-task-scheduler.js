/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    let task = new Array(26).fill(0);
    let cd = new Array(26).fill(0);
    for (let k of tasks) task[k.charCodeAt()-'A'.charCodeAt()]++;
    let tl = tasks.length;
    let ret = 0;
    while (tl>0) {
        let j = 0, k = -1;
        for (j=0;j<26;j++) {
            if (cd[j]===0 && task[j]>0 && (k===-1 || task[k]<task[j])) k = j;
        }
        if (k!==-1) {
            tl--;
            task[k]--;
            cd[k] = n;
        }
        for (let i=0;i<26;i++) 
            if (cd[i]>0 && i!==k) cd[i]--;
        ret++;
    }
    return ret;
};

var leastInterval = function(tasks, n) {
    let task = new Array(26).fill(0);
    for (let k of tasks) task[k.charCodeAt()-'A'.charCodeAt()]++;
    let max = Math.max(...task);
    let maxcount = 0;
    for (let i=0;i<26;i++) maxcount+=(task[i]===max);
    return Math.max((max-1)*(n+1)+maxcount,tasks.length);
};