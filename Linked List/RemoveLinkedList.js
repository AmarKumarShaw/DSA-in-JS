// LeetCode Problem Number -> 203 Remove Linked List
// Time Complexity: O(n)
// Space Complexity: O(1)
var removeElements = function(head, val) {
    // Create a new dummy node (sentinel) that points to the head of the list.
    // This helps handle edge cases where the head node itself needs to be removed.
    let senitel = new ListNode(0, head);

    // Initialize a pointer (curr) starting from the sentinel node.
    let curr = senitel;

    // Traverse the entire list
    while (curr && curr.next) {
        // If the next node's value is equal to the target value,
        // skip the next node by pointing to the node after it.
        if (curr.next.val == val) {
            curr.next = curr.next.next;
        } else {
            // Otherwise, move to the next node
            curr = curr.next;
        }
    }

    // Return the updated list, excluding the dummy node
    return senitel.next;
};
