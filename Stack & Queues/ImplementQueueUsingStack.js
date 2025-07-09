// LeetCode 232. Implement Queue using Stacks
// Difficulty: Easy
// Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue:
// push(x), pop(), peek(), and empty().

// Initialize the MyQueue class
var MyQueue = function() {
    // stack1 is used for enqueue (pushing new elements)
    this.stack1 = [];

    // stack2 is used temporarily for reversing the order during pop and peek
    this.stack2 = [];
};

/** 
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Just push to stack1, which acts like the back of the queue
    this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Step 1: Transfer all elements from stack1 to stack2 (reverses order)
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }

    // Step 2: Pop the top of stack2, which is the front of the queue
    let popItem = this.stack2.pop();

    // Step 3: Move everything back to stack1 to maintain the original order
    while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
    }

    // Step 4: Return the removed item
    return popItem;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Step 1: Transfer all elements to stack2 to access the front
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }

    // Step 2: Get the front item without removing it
    let peekItem = this.stack2[this.stack2.length - 1];

    // Step 3: Move elements back to stack1 to maintain order
    while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
    }

    // Step 4: Return the front item
    return peekItem;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // If both stacks are empty, then the queue is empty
    return this.stack1.length === 0 && this.stack2.length === 0;
};

/** 
 * Example usage:
 * const obj = new MyQueue();
 * obj.push(10);            // Queue is [10]
 * obj.push(20);            // Queue is [10, 20]
 * const front = obj.peek(); // returns 10
 * const removed = obj.pop(); // removes 10, returns 10
 * const isEmpty = obj.empty(); // returns false
 */
