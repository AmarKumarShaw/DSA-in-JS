// LeetCode Problem No. 24: Swap Nodes in Pairs
var swapPairs = function(head) {
    if(!head || !head.next) return head; // Return if list has 0 or 1 node (nothing to swap)

    let dummy = new ListNode(0); // Dummy node to simplify head operations
    dummy.next = head; // Point dummy to head of the list
    let prev = dummy; // Initialize prev pointer at dummy

    while(prev.next && prev.next.next){ // Loop while two nodes are available to swap
        let first = prev.next; // First node of the pair
        let second = prev.next.next; // Second node of the pair

        // Swapping
        first.next = second.next; // First points to node after the second
        second.next = first; // Second now points to first (reversing the pair)
        prev.next = second; // Previous node points to second (new head of the pair)

        // Re-positioning prev 
        prev = first; // Move prev to the end of the swapped pair
    }

    return dummy.next; // Return new head of the list
};
