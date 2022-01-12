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