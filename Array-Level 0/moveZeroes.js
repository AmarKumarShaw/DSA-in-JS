// LeetCode Problem Number -> 283. Move Zeroes array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Time Complexity - O(n)
// Space Complexity = O(1)

var moveZeroes = function(arr) {
    let x=0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            [arr[i],arr[x]] = [arr[x],arr[i]]
            x++;
        } 
    }

};