/**
 * LeetCode 150 - Evaluate Reverse Polish Notation
 * 
 * Given an array of strings `tokens` representing a Reverse Polish Notation expression,
 * evaluate and return the resulting integer.
 * 
 * Reverse Polish Notation (RPN) is a mathematical notation where every operator follows all of its operands.
 * Example: ["2", "1", "+", "3", "*"] = (2 + 1) * 3 = 9
 * 
 * Constraints:
 * - `tokens` is a valid postfix expression.
 * - Division should truncate toward zero (i.e., Math.trunc).
 * - Operands are integers and can be negative.
 */

var evalRPN = function(tokens) {
    let stack = []; // Stack to store operands and intermediate results

    for (let token of tokens) {
        if (!isNaN(token)) {
            // If the token is a number, push it to the stack
            stack.push(Number(token));
        } else {
            // Otherwise, the token is an operator
            let b = stack.pop(); // Second operand (top of stack)
            let a = stack.pop(); // First operand (next from top)
            let result;

            // Apply the operation based on the token
            switch (token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = Math.trunc(a / b); // Truncate toward zero
                    break;
            }

            // Push the result back to the stack
            stack.push(result);
        }
    }

    // Final result will be the only item left in the stack
    return stack.pop();
};
