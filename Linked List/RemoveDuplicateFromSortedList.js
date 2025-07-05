// Leetcode Problem #83: Remove Duplicates from Sorted List

var deleteDuplicates = function(head) {
    let senitel = new ListNode(0, head); // Create a dummy node pointing to head
    let curr = senitel; // Start from the dummy node
    let currSet = new Set(); // To store values we've seen

    while (curr.next) { // Traverse while next node exists
        if (currSet.has(curr.next.val)) { // If value already seen
            curr.next = curr.next.next; // Skip the duplicate node
        } else {
            currSet.add(curr.next.val); // Add new value to the set
            curr = curr.next; // Move to next node
        }
    }

    return senitel.next; // Return the actual head (excluding dummy)
};

// Other Simple Approach to compare curr element and curr.next element
// as the Linked List is sorted so we can do it  

var deleteDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};
    