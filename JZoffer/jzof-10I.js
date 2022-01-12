/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n===0) return 0;
    if (n===1) return 1;
    let fn1 = 0;
    let fn2 = 1;
    let fn = 0;
    for (let i=1;i<=n;i++) {
        fn = (fn1 + fn2) % (1e9+7);
        fn2 = fn1;
        fn1 = fn;
    }
    return fn;
};