/**
 * 🔢 LeetCode #15 - 3Sum
 * 
 * 🧠 Problem:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that:
 *  - i != j, i != k, and j != k
 *  - nums[i] + nums[j] + nums[k] == 0
 *  - The solution set must not contain duplicate triplets.
 * 
 * 📌 Example:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 * 
 * ✅ Constraints:
 * - 3 <= nums.length <= 3000
 * - -10⁵ <= nums[i] <= 10⁵
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Initialize an empty array to store the triplet results
    let result = [];

    // 🔁 Step 1: Sort the input array in ascending order
    // Sorting helps with duplicate skipping and using two pointers
    nums.sort((a, b) => a - b);

    // 🔁 Step 2: Loop through the array, fixing one number at a time
    for (let i = 0; i < nums.length - 2; i++) {
        // 🧹 Step 3: Skip duplicate elements for index i to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 🔍 Step 4: Use two-pointer approach to find remaining two numbers that sum with nums[i] to 0
        twoSum(nums, i, result);
    }

    // Return the final list of unique triplets
    return result;
};

/**
 * Helper function to find two numbers that sum with nums[i] to 0
 * @param {number[]} nums - Sorted input array
 * @param {number} i - Current index fixed in outer loop
 * @param {number[][]} result - Array to store the triplets
 */
function twoSum(nums, i, result) {
    // Initialize two pointers
    let left = i + 1;
    let right = nums.length - 1;

    // Loop until the two pointers meet
    while (left < right) {
        // 💡 Calculate the sum of the triplet
        const sum = nums[i] + nums[left] + nums[right];

        // ✅ Case 1: Found a valid triplet that sums to 0
        if (sum === 0) {
            // Push the triplet into the result array
            result.push([nums[i], nums[left], nums[right]]);
            
            // Move both pointers inward
            left++;
            right--;

            // 🔁 Skip duplicate elements from the left side
            while (left < right && nums[left] === nums[left - 1]) left++;

            // 🔁 Skip duplicate elements from the right side
            while (left < right && nums[right] === nums[right + 1]) right++;
        }

        // 🔽 Case 2: Sum is too small — increase the sum by moving `left` rightward
        else if (sum < 0) {
            left++;
        }

        // 🔼 Case 3: Sum is too large — decrease the sum by moving `right` leftward
        else {
            right--;
        }
    }
}
