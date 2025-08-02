declare class ListNode {
  val: number;
  next: ListNode | null;
  prev?: ListNode | null;
  key?: number;

  constructor(val: number, next?: ListNode | null);
  constructor(options: { key?: number; value: number });
}

declare function createLinkedList(values: number[]): ListNode | null;
declare function linkedListToArray(head: ListNode | null): number[];
