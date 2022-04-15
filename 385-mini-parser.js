/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
 var deserialize = function(s) {
    if (s[0]=='[' && s[s.length-1]==']') {
        let ret = new NestedInteger()
        let left = 0
        let t = ''
        for (let i=1; i<s.length-1; i++) {
            if (s[i]==',' && left==0) {
                ret.add(deserialize(t))
                t = ''
                continue
            }
            t += s[i]
            if (s[i]=='[') left++
            if (s[i]==']') left--
        }
        if (t!=='') ret.add(deserialize(t))
        return ret
    } else {
        return new NestedInteger(parseInt(s))
    }
};