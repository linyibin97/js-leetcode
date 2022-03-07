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

var removeNthFromEnd = function(head, n) {
    if (head===null) return head
    let fast = new ListNode(0,head)
    let slow = new ListNode(0,head)
    let ret = slow
    while (n>0) {
        fast = fast.next
        n--
    }
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return ret.next
};