/**
 * 🔢 LeetCode 153 – Find Minimum in Rotated Sorted Array
 * 
 * 🧠 Binary search is used to find the pivot point where rotation happened.
 * The minimum element is the only element smaller than the one before it.
 * Because array is rotated and sorted, we compare with right end to decide direction.
 */

var findMin = function(nums) {
    // Set the initial search boundaries
    let left = 0;
    let right = nums.length - 1;

    // Keep searching while the range has more than one element
    while (left < right) {

        // Calculate the middle index safely
        let mid = Math.floor(left + ((right - left) / 2));

        // If mid element is greater than right, the min must be to the right
        if (nums[mid] > nums[right]) {
            // Discard left half including mid
            left = mid + 1;
        } else {
            // Otherwise, the minimum is in the left half (including mid)
            right = mid;
        }
    }

    // At the end, left == right, pointing to the minimum element
    return nums[left];
};
