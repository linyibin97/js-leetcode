/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    let h = new Node(0,null,null);
    let prev = h;
    let curr = head;
    let map = new Map();
    while (curr!==null) {
        prev.next = new Node(curr.val,null,null);
        map.set(curr,prev.next);
        prev = prev.next;
        curr = curr.next;
    }
    prev = h.next;
    curr = head;
    while (curr!==null) {
        prev.random = map.get(curr.random) || null;
        prev = prev.next;
        curr = curr.next;
    }
    return h.next;
};