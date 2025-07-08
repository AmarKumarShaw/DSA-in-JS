/**
 * LeetCode Problem 242: Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example:
 * s = "anagram", t = "nagaram" → true
 * s = "rat", t = "car" → false
 *
 * Optimal Approach: Frequency Counting using Hash Map (Object)
 *
 * Time Complexity: O(n)
 *   - We loop through both strings once each.
 *
 * Space Complexity: O(1)
 *   - Max of 26 lowercase letters (constant space).
 */

var isAnagram = function(s, t) {
    // Step 1: If lengths are different, they can't be anagrams
    if (s.length !== t.length) return false;

    // Step 2: Create a map to count occurrences of each character in string s
    let map = {};

    // Step 3: Loop through string s and count each character
    for (let i = 0; i < s.length; i++) {
        // If character doesn't exist in map, initialize it to 1
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            // If it exists, increment the count
            map[s[i]]++;
        }
    }

    // Step 4: Loop through string t and decrease the count for each character
    for (let i = 0; i < t.length; i++) {
        // If character doesn't exist in map or count is already 0, it's not an anagram
        if (!map[t[i]] || map[t[i]] < 1) {
            return false;
        } else {
            // Decrease the count since we found a matching character
            map[t[i]]--;
        }
    }

    // Step 5: If all characters matched properly, return true
    return true;
};
    /**
 * Brute-force Approach:
 * Sort both strings and compare them directly.
 *
 * Time Complexity: O(n log n)
 *   - Due to sorting both strings.
 *
 * Space Complexity: O(n)
 *   - Because of string to array conversion.
 */

var isAnagram = function(s, t) {
    // Convert strings to arrays, sort them, and compare joined results
    return s.split('').sort().join('') === t.split('').sort().join('');
};
