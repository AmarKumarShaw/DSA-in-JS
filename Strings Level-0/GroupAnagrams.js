// Leetcode Problem 49: Group Anagrams

var groupAnagrams = function(strs) {
    // Approach 1: Using in-built functions

    let map = {};  
    // Initialize an empty object to store groups of anagrams

    for(let i = 0; i < strs.length; i++) {
        // Iterate over each string in the input array

        let sortedStr = strs[i].split("").sort().join("");  
        // Sort the characters of the current string to get a canonical form

        if(!map[sortedStr]) {
            // If the sorted string is not yet a key in the map

            map[sortedStr] = [strs[i]];  
            // Create a new array with the original string as the first element
        } else {
            map[sortedStr].push(strs[i]);  
            // If the key exists, push the original string to the existing group
        }
    }

    return Object.values(map);  
    // Return all the grouped anagrams as an array of arrays
};
