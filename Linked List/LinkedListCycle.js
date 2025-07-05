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