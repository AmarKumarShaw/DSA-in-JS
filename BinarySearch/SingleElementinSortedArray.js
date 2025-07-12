// LeetCode Problem 540: Single Element in a Sorted Array
// Link: https://leetcode.com/problems/single-element-in-a-sorted-array/

/*
   You are given a sorted array consisting of only integers where every element appears exactly twice, 
   except for one element which appears exactly once. Find that single one in O(log n) time and O(1) space.
*/

var singleNonDuplicate = function(nums) {
    // Initialize the binary search boundaries
    let left = 0;
    let right = nums.length - 1;

    // Perform binary search until left meets right
    while (left < right) {
        // Find the mid index
        let mid = Math.floor(left + (right - left) / 2);

        // Ensure mid is even so we can check pairs properly
        if (mid % 2 === 1) mid--;

        // If nums[mid] == nums[mid + 1], the single element is after this pair
        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2; // Skip the pair
        } else {
            // If the pair is broken, the single element is on the left including mid
            right = mid;
        }
    }

    // When left == right, we've found the single element
    return nums[left];
};
