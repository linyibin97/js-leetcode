/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    if (n===0) return 1;
    if (n===1) return 1;
    let fn_1 = 1;
    let fn_2 = 1;
    let fn = 0;
    for (let i=2;i<=n;i++) {
        fn = (fn_1 + fn_2) % (1e9+7);
        fn_2 = fn_1;
        fn_1 = fn;
    }
    return fn;
};