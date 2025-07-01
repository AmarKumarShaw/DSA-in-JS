// Leetcode Problem -> 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Time Complexity -> O(n)
// Space Complexity -> O(1)

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
        }else{
             maxCount = Math.max(count,maxCount)
              count=0;
        }
    }
    return Math.max(maxCount,count);
};

