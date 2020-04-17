function ListNode(val: number) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let newHead = new ListNode(-1);
  newHead.next = head;
  let current = newHead;
  let stack = [];
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

function test() {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  swapPairs(head);
}

test();
