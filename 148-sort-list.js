/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    if (!head) return null;
    let a = [];
    while (head) {
        a.push(head);
        head = head.next;
    }
    a.sort((a,b)=>a.val-b.val);
    for (i=0;i<a.length;i++) {
        if (i===a.length-1) a[i].next = null
            else a[i].next = a[i+1];
    }
    return a[0];
};

var sortList = function(head) {
    const merge = function(list1,list2) {
        const dummyhead = new ListNode(0,head);
        let temp = dummyhead;
        let l1 = list1;
        let l2 = list2;
        while ((l1!==null) && (l2!==null)) {
            if (l1.val<=l2.val) {
                temp.next = l1;
                l1 = l1.next;
            } else {
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }
        if (l1 !== null) temp.next = l1;
        if (l2 !== null) temp.next = l2;
        return (dummyhead.next);
    }
    const sort = function(head,tail) {
        if (head===null) return null;
        if (head.next===tail) {
            head.next = null;
            return head;
        }
        let fast = head;
        let slow = head;
        while ((fast!==tail)&&(slow!==tail)) {
            slow = slow.next;
            fast = fast.next;
            if (fast!==tail) fast = fast.next;
        }
        return merge(sort(head,slow),sort(slow,tail));
    }
    return sort(head,null);
};

