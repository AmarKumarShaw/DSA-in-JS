// LeetCode Problem 392: Is Subsequence
// Function to check whether string `s` is a subsequence of string `t`
var isSubsequence = function(s, t) {

    // Step 1: Initialize two pointers
    // i → points to characters in `s`
    // j → points to characters in `t`
    let i = 0;
    let j = 0;

    // Step 2: Traverse through both strings until one ends
    while (i < s.length && j < t.length) {

        // Step 3: If characters at s[i] and t[j] match, move `i` forward
        // This means we found the current character of `s` in `t`
        if (s[i] === t[j]) {
            i++; // Move to next character in `s`
        }

        // Step 4: Always move `j` forward to continue checking in `t`
        j++;
    }

    // Step 5: If `i` has reached the end of `s`, all characters were found in order
    // Hence, `s` is a subsequence of `t`
    return i === s.length;
};
