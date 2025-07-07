// LeetCode-style Problem -> 3541 :
// Given a string s, find the highest frequency of any vowel and the highest frequency of any consonant,
// and return the sum of these two maximum frequencies.

// Example 
// Input: s = "successes"

// Output: 6

var maxFreqSum = function(s) {

    // Initialize an empty object to store character frequencies
    let map = {};

    // Loop through each character in the string to populate the frequency map
    for (let i = 0; i < s.length; i++) {

        // If the character is not in the map, initialize its count to 1
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            // If it already exists, increment its count
            map[s[i]]++;
        }
    }

    // Define an array of vowels for checking
    let vowels = ["a", "e", "i", "o", "u"];

    // Initialize variables to track the max frequency of vowels and consonants
    let maxVowels = 0;
    let maxConstants = 0;

    // Loop through the string again to determine max frequency among vowels and consonants
    for (let i = 0; i < s.length; i++) {

        // If the character is a vowel
        if (vowels.includes(s[i])) {

            // Update maxVowels if current vowel's frequency is higher
            if (map[s[i]] > maxVowels) {
                maxVowels = map[s[i]];
            }

        } else {
            // If it's a consonant, update maxConstants if its frequency is higher
            if (map[s[i]] > maxConstants) {
                maxConstants = map[s[i]];
            }
        }
    }

    // Return the sum of max vowel frequency and max consonant frequency
    return maxVowels + maxConstants;
};

// Time Complexity: O(n)
// - O(n) to build the frequency map
// - O(n) to iterate again and check max frequencies
// - Total: O(n), where n is the length of the string

// Space Complexity: O(1)
// - Although a map is used, the number of possible lowercase characters is constant (26 letters)
// - So the space used is constant with respect to input size
