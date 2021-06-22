/**
 * initialize your data structure here.
 */
class MinStack {
  stack: number[];
  mins: number[];

  constructor() {
    this.stack = [];
    this.mins = [];
  }

  push(x: number) {
    this.stack.push(x);
    const min = this.getMin();
    if (min === undefined || x <= min) {
      this.mins.push(x);
    }
  }
  pop() {
    const val = this.stack.pop();
    const min = this.getMin();

    if (min !== undefined && val !== undefined && val <= min) {
      this.mins.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.mins[this.mins.length - 1];
  }
}
