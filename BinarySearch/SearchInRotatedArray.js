/**
 * 🔢 Leetcode 33 - Search in Rotated Sorted Array
 *
 * You are given an integer array nums sorted in ascending order, 
 * but rotated at an unknown pivot index. 
 * You are also given a target value. 
 * If target exists in the array, return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */

var search = function(nums, target) {
    // Initialize the search boundaries
    let left = 0;
    let right = nums.length - 1;

    // Continue binary search while left pointer is less than or equal to right pointer
    while (left <= right) {
        // Find the middle index (safe from overflow)
        let mid = Math.floor(left + ((right - left) / 2));

        // Check if the middle element is the target
        if (nums[mid] == target) return mid;

        // Check if the left half is sorted
        if (nums[left] <= nums[mid]) {

            // If target lies within the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                // Move search space to the left half
                right = mid - 1;
            } else {
                // Otherwise, move to the right half
                left = mid + 1;
            }

        } else {
            // Right half must be sorted

            // If target lies within the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                // Move search space to the right half
                left = mid + 1;
            } else {
                // Otherwise, move to the left half
                right = mid - 1;
            }
        }
    }

    // Target not found in array
    return -1;
};
