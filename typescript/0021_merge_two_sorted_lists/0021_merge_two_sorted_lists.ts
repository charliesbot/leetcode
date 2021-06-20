/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode0021 {
  val;
  next: ListNode0021 | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

var mergeTwoLists = function (
  l1: ListNode0021 | null,
  l2: ListNode0021 | null
) {
  let head = new ListNode0021(-1);
  let l3 = head;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      l3.next = l2;
      l2 = l2.next;
    } else {
      l3.next = l1;
      l1 = l1.next;
    }
    l3 = l3.next;
  }

  if (l1) {
    l3.next = l1;
  }

  if (l2) {
    l3.next = l2;
  }
  return head.next;
};
