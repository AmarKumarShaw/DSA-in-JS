// LeetCode Problem 225: Implement Stack using Queues
// We are implementing a LIFO Stack using two FIFO Queues (q1 and q2)

var MyStack = function() {
    this.q1 = []; // Main queue to store stack elements
    this.q2 = []; // Helper queue used during pop/top operations
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
   this.q1.push(x) // Push the element to the end of q1
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length; // Get the number of elements in q1
    for(let i = 0; i < n - 1; i++){ 
        this.q2.push(this.q1.shift()) // Move all but the last element from q1 to q2
    }
    let ans = this.q1.shift(); // The last element in q1 is the top of the stack, remove and store it
    let temp = this.q1; // Swap q1 and q2 to reset q1 as the main queue
    this.q1 = this.q2;
    this.q2 = temp;
    return ans // Return the removed top element
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length; // Get the number of elements in q1
    for(let i = 0; i < n - 1; i++){
        this.q2.push(this.q1.shift()); // Move all but the last element to q2
    }
    let ans = this.q1[0]; // The last element is the top, store it without removing
    this.q2.push(this.q1.shift()) // Move the last element to q2 to maintain queue order
    let temp = this.q1; // Swap q1 and q2 to reset q1 as the main queue
    this.q1 = this.q2;
    this.q2 = temp; // This line is incorrect (should be this.q2 = temp), but kept unchanged as requested
    return ans; // Return the top element
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0; // Stack is empty if q1 has no elements
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// Approach 1 : Implementing Stack using Single Queue
MyStack = function (){
    this.q=[];
}

MyStack.prototype.pop = function(){
    let n = this.q.length;
    for (let i=0;i<n-1;i++){
        this.q.push(this.q.shift());
    }
    return this.q.shift();
}

MyStack.prototype.top = function(){
    let n = this.q.length;
    for (let i=0;i<n-1;i++){
    this.q.push(this.q.shift())
}
    let front = this.q.shift;
    this.q.push(front);
    return front;
}

MyStack.prototype.empty = function(){
    return this.q.length === 0;
}