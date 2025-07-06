// Leetcode Problem 61: Rotate List
// Approach : Slow and Fast Pointer 

var rotateRight = function(head, k) {
    if(!head || !head.next || k===0) return head; // Edge case: empty list, single node, or zero rotation

    let slow = head; // Initialize slow pointer
    let fast = head; // Initialize fast pointer

    // Calculate Length 
    let length = 0; 
    let curr = head; 
    while (curr){ // Traverse to calculate length
        curr = curr.next; 
        length++; 
    }

    // Moving my fast pointer ahead 
    for (let i = 0; i < k % length; i++){ // Move fast pointer k % length steps ahead
        fast = fast.next; 
    }

    // I will keep running till my fast.next reaches to null
    while(fast.next){ // Move both pointers until fast reaches last node
        slow = slow.next; 
        fast = fast.next; 
    }

    fast.next = head; // Connect end of list to head (make it circular)
    let newHead = slow.next; // New head will be next of slow
    slow.next = null; // Break the circular connection
    return newHead; // Return new rotated head
};
