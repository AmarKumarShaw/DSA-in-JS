// LeetCode Problem Number -> 136 

// Question:
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    // General Way 
    // const hash={}
    // let singleNumber;
    // for(let i=0;i<nums.length;i++){
    //     if(!hash[nums[i]]){
    //         hash[nums[i]]=1;
    //     }else{
    //     hash[nums[i]] = hash[nums[i]]+1;
    //     }
    
    // }

    // for (let j=0;j<nums.length;j++){
    //     if(hash[nums[j]]==1){
    //        return nums[j];
    //     }
    // }

    // Optimal Method using XOR 

    let xor;
    for (let i=0;i<nums.length;i++){
        xor = xor ^ nums[i]
    }
    return xor;

};