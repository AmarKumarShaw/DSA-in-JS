/**
 * LeetCode 155: Min Stack
 *
 * Time Complexity:
 * - push: O(1)
 * - pop: O(1)
 * - top: O(1)
 * - getMin: O(1)
 *
 * Space Complexity: O(n) - for maintaining two stacks
 */

var MinStack = function() {
    this.stack = [];     // Main stack to store all elements
    this.minStack = [];  // Aux stack to store current minimums
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val); // Push value to main stack
    // Push the new min to minStack
    if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const removed = this.stack.pop(); // Remove top from main stack
    // If removed element is the current minimum, remove it from minStack too
    if (removed === this.getMin()) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]; // Return top of main stack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]; // Return top of minStack (current min)
};
