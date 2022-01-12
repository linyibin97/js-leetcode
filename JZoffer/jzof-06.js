/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let ret = [];
    const dfs = function(node) {
        if (node===null) return;
        dfs(node.next);
        ret.push(node.val);
    }
    dfs(head);
    return ret;
};