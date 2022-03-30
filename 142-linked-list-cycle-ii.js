/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function(head) {
    if (head===null || head.next===null) return null
    let slow = head.next
    let fast = head.next.next
    while (fast!==null) {
        if (slow===fast) {
            let p = head
            while (p!==slow) {
                slow = slow.next
                p = p.next
            }
            return p
        }
        slow = slow.next
        fast = fast.next
        if (fast!==null) fast = fast.next
    }
    return null
};