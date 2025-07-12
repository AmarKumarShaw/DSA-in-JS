// Leet Code Problem Two Sum -> 1 

var twoSum = function(nums, target) {

  
    // Hash map to store value → index
    let map = {};
    
    // Store the length of the array
    let n = nums.length;
  
    // Result array to store the pair of indices (if found)
    let result = [];
  
    // First pass: store each number's value as key and its index as value
    for (let i = 0; i < n; i++) {
      map[nums[i]] = i;
    }
  
    // Second pass: look for the complement that adds up to target
    for (let i = 0; i < n; i++) {
      let pair;
      
      // Calculate the number needed to reach the target
      pair = target - nums[i];
  
      // Check if that pair exists in the map AND it’s not the same index
      // Note: we avoid using the same number twice
      if (map.hasOwnProperty(pair) && map[pair] !== i) {
        return [i, map[pair]]; // Return the indices
      }
    }
  
    // If no such pair is found, return the empty result
    return result;
  };
  