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
 var reverseList = function(head) {
    if (head === null) return null;
    let prev = head;
    head = head.next;
    prev.next = null;
    while (head !== null) {
        let t = head.next;
        head.next = prev;
        prev = head;
        head = t; 
    }
    return prev;
};