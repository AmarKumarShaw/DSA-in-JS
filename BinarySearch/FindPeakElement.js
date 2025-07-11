/**
 * 🔢 Leetcode 162 - Find Peak Element
 * 
 * 📘 Problem Description:
 * A peak element is an element that is strictly greater than its neighbors.
 * Given an input array `nums`, find a peak element and return its index.
 * Assume that nums[-1] = nums[n] = -∞, and there is always at least one peak.
 * The algorithm must run in O(log n) time complexity.
 */

var findPeakElement = function(nums) {
    // Initialize the search space with left at start and right at end of array
    let left = 0;
    let right = nums.length - 1;
  
    // Continue binary search while the search space has more than one element
    while (left < right) {
      // Calculate the middle index of the current search space
      let mid = Math.floor(left + ((right - left) / 2));
  
      // If the mid element is greater than its next neighbor,
      // then the peak must be on the left side (including mid)
      if (nums[mid] > nums[mid + 1]) {
        right = mid;
      } else {
        // Otherwise, the peak lies on the right side
        left = mid + 1;
      }
    }
  
    // When left == right, we've found a peak element's index
    return left;
  };
  