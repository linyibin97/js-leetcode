/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let curr = head;
    let prev = null;
    while (curr!==null) {
        if (curr.val===val) {
            if (prev!==null) prev.next = curr.next;
                else head = curr.next;
            break;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
};