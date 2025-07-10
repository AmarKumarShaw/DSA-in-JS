/**
 * @param {string} s
 * @return {string}
 */
/**
 * LeetCode Problem 1021: Remove Outermost Parentheses
 * 
 * Given a valid parentheses string `s`, the goal is to remove 
 * the outermost parentheses of every primitive substring.
 * 
 * A primitive string is a non-empty valid parentheses string 
 * that cannot be split into smaller valid parentheses strings.
 * 
 * Example:
 * Input:  s = "(())(()())"
 * Output:      "()()()"
 */

var removeOuterParentheses = function(s) {
    let stack = [];               
    // Stack to track the depth (nesting) of parentheses
    let ans = "";                 
    // String to store the result after removing outermost parentheses

    for (let i = 0; i < s.length; i++) {  
        // Loop through each character of the input string
        if (s[i] === '(') {               
            // If the character is an opening parenthesis
            stack.push('(');              
            // Push it to the stack to increase depth
            ans += (stack.length > 1) ? s[i] : "";  
            // Only add it to result if it's not the outermost '('
        } else {                          
            // If the character is a closing parenthesis
            ans += (stack.length > 1) ? s[i] : "";  
            // Only add it to result if it's not the outermost ')'
            stack.pop();                  
            // Pop from the stack to decrease depth
        }
    }

    return ans;  // Return the final processed string
};
