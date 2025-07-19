var maxSlidingWindow = function(nums, k) {
    let result = [];
    let deque = [];
    
    for(let i=0;i<nums.length;i++){
        // Step 1 : Checking for removing the deque in the if it is lesser than current deque element
        while(deque.length > 0 && nums[deque[deque.length-1]] <= nums[i]){
            deque.pop();
        }
       //  Step2: Push element into deque all element removal is already going in the above
        deque.push(i)
        
        
       //  Step 3 : Check and remove from front if the array is larger than deque 
        if(deque[0]<= i-k){
            deque.shift()
        }
        
       //  Step 4: check if window is complete add to deque
       if(i >= k-1){
           result.push(nums[deque[0]])
       }
    }
    return result;
   };