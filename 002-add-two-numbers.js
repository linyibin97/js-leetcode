/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let l31 = new ListNode();
    let l3 = l31;
    let c = 0;
    let nullnode = new ListNode();
    while (true) {
      let sum = l1.val+l2.val+c;
      l3.val = sum % 10;
      c = Number.parseInt(sum/10);
      if ((l1.next==null) && (l2.next==null) && c==0) return l31;
      l1 = l1.next || nullnode;
      l2 = l2.next || nullnode;
      let newl3 = new ListNode();
      l3.next = newl3;
      l3 = newl3;
    }
  };

  var addTwoNumbers = function(l1, l2) {
    let c = 0 //进位
    let ret = new ListNode()
    let prev = ret
    while (l1!==null || l2!==null || c!==0) {
        let s = c
        if (l1!==null) s+= l1.val
        if (l2!==null) s+= l2.val
        c = Math.floor(s / 10)
        prev.next = new ListNode(s % 10)
        prev = prev.next
        if (l1!==null) l1 = l1.next
        if (l2!==null) l2 = l2.next
    }
    return ret.next
};