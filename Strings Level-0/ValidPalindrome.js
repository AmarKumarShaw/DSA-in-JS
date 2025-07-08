// LeetCode Problem Number: 125. Valid Palindrome
// Solved
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.


// ✅ Approach 1: Filter and Reverse
// Time Complexity: O(n), where n is the length of the input string
// Space Complexity: O(n), for storing filtered and reversed strings

var isPalindromeUsingReverse = function(s) {
    // Convert the entire string to lowercase
    s = s.toLowerCase();

    // Initialize empty strings to hold filtered alphanumerics and their reverse
    let filtered = "";
    let rev = "";

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Check if character is alphanumeric using regex
        if (s[i].match(/[a-z0-9]/i)) {
            // Append to filtered
            filtered = filtered + s[i];
            // Prepend to rev (building reverse)
            rev = s[i] + rev;
        }
    }

    // Compare filtered string with its reverse
    return filtered === rev;

    // 🔁 Alternate optimized version using built-ins:
    // const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // const palindrome = cleaned.split("").reverse().join("");
    // return cleaned === palindrome;
};


// ✅ Approach 2: Two-Pointer Technique (more optimal)
// Time Complexity: O(n), where n is the length of the input string
// Space Complexity: O(1), constant space used

var isPalindrome = function(s) {
    // Convert the entire string to lowercase
    s = s.toLowerCase();

    // Initialize two pointers: start (i) and end (j)
    let i = 0;
    let j = s.length - 1;

    // Loop until the pointers cross each other
    while (i < j) {
        // If left character is not alphanumeric, move i forward
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        // If right character is not alphanumeric, move j backward
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        // If characters match, move both pointers inward
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        // If characters do not match, return false
        else {
            return false;
        }
    }

    // If loop completes, string is a valid palindrome
    return true;
};


// 🔍 Example usage:
const str = "A man, a plan, a canal: Panama";
console.log("Approach 1 (Reverse):", isPalindromeUsingReverse(str)); // true
console.log("Approach 2 (Two Pointers):", isPalindrome(str)); // true
