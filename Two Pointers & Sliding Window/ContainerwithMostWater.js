// LeetCode Problem #11: Container With Most Water
// URL: https://leetcode.com/problems/container-with-most-water/

// Description:
// You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints 
// of the i-th line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// Note: You may not slant the container, and the height is determined by the shorter of the two lines.

// Approach:
// Two-pointer technique:
// - Start with two pointers, one at the beginning (`i`) and one at the end (`j`) of the array.
// - Calculate the area formed by lines at `i` and `j` as: (j - i) * min(height[i], height[j])
// - Move the pointer pointing to the shorter line inward, because the area is limited by the shorter line.
// - Update the maximum area found (`maxWater`) each time.
// - Continue this until the two pointers meet.

var maxArea = function(arr) {
    let i = 0; // Initialize the left pointer
    let j = arr.length - 1; // Initialize the right pointer
    let maxWater = 0; // Variable to store the maximum area found

    // Loop until the two pointers meet
    while (i < j) {
        // Calculate the area between the lines at positions i and j
        // Area = width * height = (j - i) * min(height[i], height[j])
        let area = (j - i) * Math.min(arr[i], arr[j]);

        // Move the pointer at the shorter line inward
        // This is because moving the taller line won't increase the area
        if (arr[i] > arr[j]) {
            j--;
        } else {
            i++;
        }

        // Update maxWater if the current area is greater
        maxWater = Math.max(maxWater, area);
    }

    // Return the maximum area found
    return maxWater;
};
