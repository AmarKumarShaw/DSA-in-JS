// LeetCode Problem -> 141 Linked List Cycle
// Approach 1 : Using Hashmaps 
var hasCycle = function(head) {
    let newNodes = new Set()
    let curr = head;

    while(curr){
        if(newNodes.has(curr)){
            return true;
        }
        newNodes.add(curr)
        curr = curr.next;
        
    }
    return false


    
};

// Approach 2 :  Floyd's Cycle Algorithm
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast !=null && fast.next !=null){
       slow = slow.next;
      fast = fast.next.next;
      if(slow == fast){
          return true
      }
     
    }
  
  return false;
      
  };