/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let i = head;
    let j = head;
    while (k>0) {
        j = j.next;
        k--;
    }
    while (j!==null) {
        i = i.next;
        j = j.next;
    }
    return i;
};