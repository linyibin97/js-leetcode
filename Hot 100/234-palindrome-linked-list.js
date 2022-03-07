/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let a = [];
    while (head!==null) {
        a.push(head.val);
        head = head.next;
    }
    for (let i=0;i<a.length;i++) 
        if (a[i]!==a[a.length-i-1]) return false;
    return true;
};


var isPalindrome = function(head) {
    if (head===null) return true
    let mid = findMid(head)
    mid = reverseList(mid.next)
    while (mid!==null && head!==null) {
        if (mid.val!==head.val) return false
        mid = mid.next
        head = head.next
    }
    return true

    function findMid(head) {
        let slow = head
        let fast = head
        while (fast.next!==null && fast.next.next!==null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    function reverseList(head) {
        let curr = head
        let prev = null
        while (curr!==null) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
};