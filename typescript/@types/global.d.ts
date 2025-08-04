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

export {};
