/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let i = head;
    let rec = [];
    while (true) {
        rec.push(i);
        if (!i.next) break;
        i = i.next;
    }
    if (rec.length===1) return null;
    if (n===rec.length) return rec[1];
    rec[rec.length-n-1].next = rec[rec.length-n].next;
    return head;
};