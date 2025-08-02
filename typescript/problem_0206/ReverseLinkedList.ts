/*
 * [206] Reverse Linked List
 *
 * Difficulty: TODO
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head: ListNode | null): ListNode | null {
  let node: ListNode | null = head;
  let prevNode: ListNode | null = null;
  let nextNode: ListNode | null = null;

  while (node != null) {
    nextNode = node.next;
    node.next = prevNode;
    prevNode = node;
    node = nextNode;
  }

  return prevNode;
};

export { reverseList };
