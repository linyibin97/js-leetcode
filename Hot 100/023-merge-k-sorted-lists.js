/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let min=10e5;
    let mini=-1;
    for (let i=0;i<lists.length;i++){
      if (lists[i] && lists[i].val<min) {
        min = lists[i].val;
        mini = i;
      }
    }
    if (mini===-1) return null;
    let result = lists[mini];
    lists[mini] = lists[mini].next;
    result.next = mergeKLists(lists);
    return result; 
  };


  var mergeKLists = function(lists) {
    const mergeTwoLists = function(list1, list2) {
        if (list1===null) return list2;
        else if (list2===null) return list1;
        else if (list1.val<list2.val) {
            list1.next = mergeTwoLists(list1.next,list2);
            return list1;
        }
        else {
            list2.next = mergeTwoLists(list1,list2.next);
            return list2;
        }
    }
    const mergeList = function(l,r) {
        if (l===r) return lists[l]
        let m = (l+r)>>1
        return mergeTwoLists(mergeList(l,m),mergeList(m+1,r))
    }
    if (lists.length===0) return null
    return mergeList(0,lists.length-1)
};