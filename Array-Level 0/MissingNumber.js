// LeetCode Problem Number-> 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Basic formula -> n(n+1)/2

var missingNumber = function(nums) {
    let averageSum = nums.length*(nums.length+1)/2;
    let  expectedSum =0;
    for(let i=0;i<nums.length;i++){
        expectedSum += nums[i]
    }
    return averageSum - expectedSum;
};