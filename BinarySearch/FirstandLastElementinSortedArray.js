// LeetCode 34: Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

var searchRange = function(nums, target) {

    // Function to find the first (leftmost) occurrence of the target using binary search
    function firstOccur(nums, target){
        let left = 0; // Left boundary of search space
        let right = nums.length - 1; // Right boundary of search space
        let first = -1; // Initialize result as -1 (not found)

        // Binary search loop to narrow down to the first occurrence
        while(left <= right){
            let mid = Math.floor(left + ((right - left) / 2)); // Calculate mid index

            if(nums[mid] === target){ // If target is found at mid
                first = mid; // Update result with current index
                right = mid - 1; // Search left half for earlier occurrence
            }
            else if(nums[mid] < target){ // If target is greater, move right
                left = mid + 1;
            } else { // If target is smaller, move left
                right = mid - 1;
            }
        }

        return first; // Return the index of the first occurrence
    }

    // Function to find the last (rightmost) occurrence of the target using binary search
    function lastOccur(nums, target){
        let left = 0; // Left boundary of search space
        let right = nums.length - 1; // Right boundary of search space
        let last = -1; // Initialize result as -1 (not found)

        // Binary search loop to narrow down to the last occurrence
        while(left <= right){
            let mid = Math.floor(left + ((right - left) / 2)); // Calculate mid index

            if(nums[mid] === target){ // If target is found at mid
                last = mid; // Update result with current index
                left = mid + 1; // Search right half for later occurrence
            }
            else if(nums[mid] < target){ // If target is greater, move right
                left = mid + 1;
            } else { // If target is smaller, move left
                right = mid - 1;
            }
        }

        return last; // Return the index of the last occurrence
    }

    // Call helper functions to get the first and last occurrence of the target
    let first = firstOccur(nums, target); // First index of target
    let last = lastOccur(nums, target);   // Last index of target

    return [first, last]; // Return the range as an array [first, last]
};
