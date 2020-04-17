/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.mins = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  const min = this.getMin();
  if (min === undefined || x <= min) {
    this.mins.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const val = this.stack.pop();
  const min = this.getMin();

  if (min !== undefined && val <= min) {
    this.mins.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1];
};
