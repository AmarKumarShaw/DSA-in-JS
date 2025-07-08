// LeetCode Problem Number. -> 1903. Largest Odd Number in String
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

var largestOddNumber = function(num) {
    // If the input string is empty, return an empty string
    if(num.length === 0) return "";

    // Iterate from the end of the string to the beginning
    for(let i = num.length - 1; i >= 0; i--) {
        // Check if the current digit is odd
        if(parseInt(num[i]) % 2 != 0) {
            // Return the current version of num if an odd digit is found
            return num;
        } else {
            // Remove the last digit and continue checking
            num = num.slice(0, i);
        }
    }

    // Return an empty string if no odd digit is found
    return "";
}
