/*
 * [24] Swap Nodes in Pairs
 *
 * Difficulty: TODO
 */

const swapPairs = function (head: ListNode | null): ListNode | null {
  let newHead = new ListNode(-1);
  newHead.next = head;
  let current: ListNode | null = newHead;
  let stack: ListNode[] = [];
  while (current) {
    stack.push(current);
    if (stack.length === 3) {
      const [init, prev, last] = stack;
      stack.length = 0;
      current = last.next;
      last.next = prev;
      prev.next = current;
      init.next = last;
      current = last;
    }

    current = current.next;
  }

  return newHead.next;
};

// function test() {
// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// swapPairs(head);
// }

// test();

export { swapPairs };
