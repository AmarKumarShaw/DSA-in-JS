// LeetCode Problem 2: Add Two Numbers
// Time Complexity: O(n) where n is the length of the longer list
// Space Complexity: O(n) for the new linked list created

var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to build the result list
    let dummy = new ListNode(0);

    // 'curr' points to the current node in the result list
    let curr = dummy;

    // Initialize carry to 0 for digit overflow (e.g., 9 + 5 = 14)
    let carry = 0;

    // Loop until both lists are fully processed and no carry remains
    while (l1 || l2 || carry) {
        // Get values from l1 and l2 or use 0 if they are null, then add carry
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

        // Calculate new carry for next iteration
        carry = Math.floor(sum / 10);

        // Create a new node with the digit part of sum (sum % 10)
        curr.next = new ListNode(sum % 10);

        // Move 'curr' to the new node
        curr = curr.next;

        // Move l1 and l2 to their next nodes if they exist
        l1 = l1?.next;
        l2 = l2?.next;
    }

    // Return the next of dummy node which points to the actual result
    return dummy.next;
};
