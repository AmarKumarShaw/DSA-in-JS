// 📘 LeetCode 503: Next Greater Element II
// Given a circular array, find the next greater number for every element.
// If it doesn't exist, return -1 for that position.

var nextGreaterElements = function(nums) {
    // Step 1: Get length of the array
    let n = nums.length;

    // Step 2: Initialize the result array with -1 for all positions
    let answer = Array(n).fill(-1);

    // Step 3: Stack to store indices of potential "next greater elements"
    let stack = [];

    // Step 4: Traverse the array twice in reverse to handle circularity
    for (let i = (n * 2) - 1; i >= 0; i--) {

        // Step 5: Use modulo to simulate circular indexing
        const index = i % n;

        // Step 6: Get the current number
        let num = nums[index];

        // Step 7: Maintain a decreasing stack
        // Pop elements from the stack that are less than or equal to current number
        while (stack.length && nums[stack[stack.length - 1]] <= num) {
            stack.pop();
        }

        // Step 8: Only fill the result during the first pass (i < n)
        if (i < n) {
            // If stack is not empty, top of stack is the next greater element
            answer[i] = stack.length ? nums[stack[stack.length - 1]] : -1;
        }

        // Step 9: Push current index onto the stack
        stack.push(index);
    }

    // Step 10: Return the final result
    return answer;
};
