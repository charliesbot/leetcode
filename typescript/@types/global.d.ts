type ListNodeConstructor = {
  key?: number;
  value: number;
};

declare global {
  class ListNode {
    prev: ListNode | null;
    next: ListNode | null;
    val: number;
    key?: number;

    constructor(val: number, next?: ListNode | null);
    constructor(options: ListNodeConstructor);
  }

  function createLinkedList(values: number[]): ListNode | null;
  function linkedListToArray(head: ListNode | null): number[];
}

// Implementation
(globalThis as any).ListNode = class ListNode {
  prev: ListNode | null;
  next: ListNode | null;
  val: number;
  key?: number;

  constructor(valOrOptions: number | ListNodeConstructor, next: ListNode | null = null) {
    if (typeof valOrOptions === 'object') {
      this.prev = null;
      this.next = null;
      this.val = valOrOptions.value;
      this.key = valOrOptions.key;
    } else {
      this.prev = null;
      this.next = next;
      this.val = valOrOptions;
      this.key = undefined;
    }
  }
};

(globalThis as any).createLinkedList = function(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  
  const head = new ListNode(values[0]);
  let current = head;
  
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  
  return head;
};

(globalThis as any).linkedListToArray = function(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
};

export {};