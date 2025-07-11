/**
 * Leetcode Problem 374: Guess Number Higher or Lower
 *
 * Problem Description:
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number is higher or lower.
 *
 * You call a pre-defined API `guess(int num)`:
 *    - returns -1 if the picked number is lower than your guess
 *    - returns 1 if the picked number is higher than your guess
 *    - returns 0 if the guess is correct
 *
 * Your goal is to implement the function:
 *    var guessNumber = function(n) { ... }
 * which returns the correct number I picked.
 *
 * The solution must be efficient.
 */

/**
 * @param {number} n - The upper bound of the number range [1...n]
 * @return {number} - The number picked by the game
 */
var guessNumber = function(n) {
    // Initialize the search range: left = 1, right = n
    let left = 1;
    let right = n;

    // Perform binary search while the range is valid
    while (left <= right) {
        // Find the middle of the current range to avoid overflow
        let mid = Math.floor(left + ((right - left) / 2)); // Calculate mid safely

        // Call the guess API with mid
        const result = guess(mid); // Get the feedback for current guess

        // If guess is correct, return mid
        if (result === 0) return mid; // Found the number

        // If the picked number is higher than mid
        if (result === 1) {
            left = mid + 1; // Discard left half including mid
        }

        // If the picked number is lower than mid
        if (result === -1) {
            right = mid - 1; // Discard right half including mid
        }
    }

    // Control should never reach here if input is valid
    return -1;
};
