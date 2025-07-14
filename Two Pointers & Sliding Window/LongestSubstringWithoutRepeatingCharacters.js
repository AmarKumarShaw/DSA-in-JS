// LeetCode Problem #3: Longest Substring Without Repeating Characters

// 🔍 Approach:
// Use the sliding window technique with two pointers (left and right).
// Use a Set to store characters in the current window.
// If a duplicate character is found, move the left pointer until the duplicate is removed.
// Keep track of the maximum length of all valid windows seen.

// ⏱️ Time Complexity: O(n) – Each character is added and removed from the Set at most once.
// 🧠 Space Complexity: O(k) – Where k is the size of the longest substring (can be up to O(n) if all characters are unique).

function lengthOfLongestSubstring(s) {
    // Initialize the left pointer of the sliding window and the max length variable
    let left = 0, maxLength = 0;
  
    // Set to keep track of characters in the current window
    const seen = new Set();
  
    // Iterate over the string with the right pointer
    for (let right = 0; right < s.length; right++) {
  
      // If character at right is already in the set, shrink window from the left
      while (seen.has(s[right])) {
        // Remove the leftmost character from the set
        seen.delete(s[left]);
  
        // Move the left pointer to the right
        left++;
      }
  
      // Add the current character to the set
      seen.add(s[right]);
  
      // Update maxLength if current window is longer
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    // Return the maximum length found
    return maxLength;
  }
  