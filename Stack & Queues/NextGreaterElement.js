// LeetCode Problem No-> 496 Next Greater Element
// Using Stack and reverse movement 

var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const map = {};
  
    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
      const num = nums2[i];
  
      // Remove all smaller or equal elements from the stack
      while (stack.length && stack[stack.length - 1] <= num) {
        stack.pop();
      }
  
      // If stack is not empty, top is the next greater element
      map[num] = stack.length ? stack[stack.length - 1] : -1;
  
      // Push current number to stack
      stack.push(num);
    }
  
    // Build result for nums1 using the map
    return nums1.map(num => map[num]);
  };
  