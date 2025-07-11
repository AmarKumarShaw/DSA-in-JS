/*
  LeetCode #69: Square Root of x
  --------------------------------
  Problem:
    Given a non-negative integer x, compute and return the square root of x.
    Since the return type is an integer, the decimal digits are truncated,
    and only the integer part of the result is returned.

  Approach:
    We use Binary Search to find the integer square root of x.

  Time Complexity: O(log x)
  Space Complexity: O(1)
*/

var mySqrt = function(x) {
    // If x is 0, return 0 immediately (edge case)
    if (x == 0) return x;

    // Initialize the left boundary of binary search
    let left = 1;

    // Initialize the right boundary of binary search
    let right = x;

    // Variable to store the most recent valid answer (mid^2 < x)
    let ans;

    // Binary Search loop to narrow down the range
    while (left <= right) {
        // Calculate the middle point of current range
        let mid = Math.floor((left + right) / 2);

        // If mid*mid is exactly x, return mid as the square root
        if (mid * mid == x) {
            return mid;
        }

        // If mid*mid is greater than x, move the right boundary left
        if (mid * mid > x) {
            right = mid - 1;
        } else {
            // If mid*mid is less than x, store mid as possible answer
            ans = mid;

            // And move the left boundary right
            left = mid + 1;
        }
    }
    // If exact square root not found, return the floor of it (last valid mid)
    return ans;
};
