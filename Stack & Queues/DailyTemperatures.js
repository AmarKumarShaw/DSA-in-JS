// LeetCode Problem No-> 739  : Daily Temperatues 
// Using Stack and going reversely to 

function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // stores indices of warmer days
  
    for (let i = n - 1; i >= 0; i--) {
      // Pop all indices with temperatures <= current temperature
      while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
        stack.pop();
      }
  
      // If stack not empty, calculate distance to next warmer day
      if (stack.length > 0) {
        answer[i] = stack[stack.length - 1] - i;
      }
  
      // Push current day index to the stack
      stack.push(i);
    }
  
    return answer;
  }
  