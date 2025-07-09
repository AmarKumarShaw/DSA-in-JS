/**
 * LeetCode Problem 20: Valid Parentheses
 *
 * Description:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Example:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Input: s = "(]"
 * Output: false
 *
 * Time Complexity: O(n) - We traverse the string once.
 * Space Complexity: O(n) - In the worst case, we store all opening brackets in the stack.
 */

var isValid = function(s) {
    const stack = []; // Stack to keep track of opening brackets
    const map = {     // Map to match closing brackets with corresponding opening brackets
        ")" : "(",
        "}" : "{",
        "]" : "[",
    };

    for (let char of s) { // Iterate over each character in the input string
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char); // If it's an opening bracket, push it to the stack
        } else if (stack.length === 0 || stack.pop() != map[char]) {
            return false; // If it's a closing bracket and doesn't match the top of stack, return false
        }
    }

    return stack.length === 0; // If stack is empty at the end, all brackets are matched correctly
};
