// LeetCode Problem No-> 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. 
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Approach 1 : Using includes method

var numJewelsInStones = function(jewels, stones) {
    let count =0;
    let stone = stones.split("")
    for (let i=0;i<stone.length;i++){
        if(jewels.includes(stone[i])){
        count++;
        }
    }
    return count;
};