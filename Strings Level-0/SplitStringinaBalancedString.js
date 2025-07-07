// LeetCode Problem No: 1221. Split a String in Balanced Strings
// ✅ Status: Solved | Difficulty: Easy

// 💡 Hint: Balanced strings have an equal number of 'L' and 'R' characters.
// 🎯 Goal: Return the maximum number of balanced substrings you can get from the input string.

function balancedStringSplit(s) {
    let balance = 0; // 👉 Keeps track of net count between 'R' (+1) and 'L' (-1)
    let count = 0;   // 👉 Counts how many balanced substrings we've found
  
    for (let char of s) {
      // 🔁 Loop through each character in the input string
  
      if (char === 'R') balance++;      // ➕ If it's 'R', increment balance
      else if (char === 'L') balance--; // ➖ If it's 'L', decrement balance
  
      if (balance === 0) count++; // ✅ If balance is 0, we found a balanced substring, so increase count
    }
  
    return count; // 🎯 Return the total number of balanced substrings
  }
  