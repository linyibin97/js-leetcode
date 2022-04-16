/**
 * @param {number} n
 * @return {number}
 */
 var largestPalindrome = function(n) {
    const minnum = Math.pow(10,n-1)
    const maxnum = Math.pow(10,n)-1
    if (n==1) return 9
    for (let i=maxnum; i>=minnum; i--) {
        let t = BigInt(i + String(i).split('').reverse().join(''))
        let x = BigInt(maxnum);
        while (x * x >= t) {
            if (t % x === BigInt(0)) {
                return t % BigInt(1337);
            }
            x--;
        }
    }
};