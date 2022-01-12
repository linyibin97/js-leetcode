/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head===null || head.next===null) return head;
    let l = head.next;
    let t = head;
    head.next = null
    while (l!==null) {
        [l.next,t,l] = [t,l,l.next];
    }
    return t;
};