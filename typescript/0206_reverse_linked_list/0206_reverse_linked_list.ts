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

const reverseList = function (head: ListNode): ListNode {
  let node: ListNode | null = head;
  let prevNode: ListNode | null = null;
  let nextNode: ListNode | null = null;

  while (node != null) {
    nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }

  return prevNode!;
};
