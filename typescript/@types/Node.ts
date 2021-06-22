type ListNodeConstructor = {
  key?: number;
  value: number;
};

class ListNode {
  prev: ListNode | null;
  next: ListNode | null;
  val: number;
  key?: number;

  constructor({ key, value }: ListNodeConstructor) {
    this.prev = null;
    this.next = null;
    this.val = value;
    this.key = key;
  }
}
