/**
 * 🔺 LeetCode 852 - Peak Index in a Mountain Array
 *
 * 📘 Problem Description:
 * An array `arr` is a mountain array if:
 *   - arr.length >= 3
 *   - There exists some i (0 < i < arr.length - 1) such that:
 *       arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 * 
 * Given a mountain array `arr`, return the index `i` of the **peak element**.
 * The peak is the only element that is **greater than both its neighbors**.
 * The solution must be in O(log n) time using binary search.
 */

var peakIndexInMountainArray = function(arr) {
    // Start binary search with full array boundaries
    let left = 0;
    let right = arr.length - 1;

    // Continue while left is strictly less than right
    while (left < right) {
        // Calculate the middle index safely
        let mid = Math.floor(left + ((right - left) / 2));

        // Check if we are on the decreasing slope
        if (arr[mid + 1] < arr[mid]) {
            // Peak is to the left side or might be mid
            right = mid;
        } else {
            // We are on the increasing slope, move right
            left = mid + 1;
        }
    }

    // When left === right, that's our peak index
    return right;
};
