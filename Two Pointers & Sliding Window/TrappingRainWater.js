// LeetCode Problem #42: Trapping Rain Water
// URL: https://leetcode.com/problems/trapping-rain-water/

// Description:
// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it is able to trap after raining.

// The amount of water that can be trapped at a given index depends on the height of the tallest bars 
// to the left and right of it. The water above the current bar = 
// min(maxLeft, maxRight) - height[current], if this value is > 0.

// Approach: Two Pointer Technique
// - Use two pointers (`left` and `right`) starting at both ends of the array.
// - Track the highest bar seen so far from the left (`leftMax`) and from the right (`rightMax`).
// - At each step, the pointer with the lesser height moves inward.
// - If the current height is greater than the corresponding max (leftMax/rightMax), update it.
// - Otherwise, add the difference between that max and the current height to `totalWater`.
// - Continue until the pointers meet.

var trap = function(height) {
    // Initialize two pointers at the start and end of the height array
    let left = 0;
    let right = height.length - 1;

    // Variables to store the highest bars from the left and right sides
    let leftMax = 0;
    let rightMax = 0;

    // Variable to accumulate the total trapped water
    let totalWater = 0;

    // Loop until the two pointers meet
    while (left < right) {
        // If the height at left is less than height at right
        if (height[left] < height[right]) {
            // If current height is greater than leftMax, update leftMax
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                // Water can be trapped, add the difference between leftMax and current height
                totalWater += leftMax - height[left];
            }
            // Move the left pointer inward
            left++;
        } else {
            // If current height is greater than rightMax, update rightMax
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                // Water can be trapped, add the difference between rightMax and current height
                totalWater += rightMax - height[right];
            }
            // Move the right pointer inward
            right--;
        }
    }

    // Return the total trapped water
    return totalWater;
};
