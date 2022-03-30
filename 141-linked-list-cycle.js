/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (head === null) return false;
    if (head.val === true) return true;
    if (head.next === null) return false;
    head.val = true;
    return hasCycle(head.next);
};


var hasCycle = function(head) {
    let slow = head
    let fast = head
    if (fast!==null) fast = fast.next
    while (fast!==null) {
        if (slow===fast) {
            return true
        }
        slow = slow.next
        fast = fast.next
        if (fast!==null) fast = fast.next
    }
    return false
};