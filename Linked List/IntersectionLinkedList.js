// LeetCode Problem No -> 160 
// Intersection Linked List 

//  Best Approach Using HashMap 
var getIntersectionNode = function(headA, headB) {
    let store = new Set()
    while(headB){
        store.add(headB);
        headB = headB.next;
    }
    while(headA){
       if(store.has(headA)){
        return headA;
       }
       headA = headA.next
    }
    return null;

};
