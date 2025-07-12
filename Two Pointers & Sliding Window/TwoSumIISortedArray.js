// LeetCode 167: Two Sum II - Input array is sorted
// Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number. Return the indices of the two numbers (1-based indexing).

var twoSum = function(numbers, target) {
    // Initialize two pointers: one at the beginning, one at the end of the array
    let left = 0;
    let right = numbers.length - 1;

    // Loop until the two pointers meet
    while (left < right) {
        // Calculate the sum of the values at the two pointers
        let sum = numbers[left] + numbers[right];

        // If the sum matches the target, return the 1-based indices
        if (sum == target) {
            return [left + 1, right + 1];
        }

        // If the sum is too large, move the right pointer leftward to decrease the sum
        if (sum > target) {
            right--;
        } 
        // If the sum is too small, move the left pointer rightward to increase the sum
        else {
            left++;
        }
    }

    // If no valid pair is found (based on constraints, this line should never be reached)
};
