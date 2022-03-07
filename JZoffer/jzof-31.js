/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let h = 0;
    for (let i=0;i<popped.length;i++) {
        if (stack.length>0 && stack[stack.length-1]===popped[i]) {
            stack.pop();
        } else {
            while (h<pushed.length && pushed[h]!==popped[i]) {
                stack.push(pushed[h]);
                h++;
            }
            if (h>=pushed.length) return false;
            h++;
        }
    }
    return true;
};