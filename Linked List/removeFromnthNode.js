// LeetCode  Problem No-> 19 
// Remove from the nth node in Linked List


var removeNthFromEnd = function(head, n) {
    // Create a sentinel (dummy) node and point it to the head
    // This helps handle edge cases (like removing the head node)
    let senitel = new ListNode(0, head);

    // Initialize a pointer to traverse the list and a variable to store its length
    let first = head;
    let length = 0;

    // Traverse the entire list to calculate its total length
    while (first) {
        length++;
        first = first.next;
    }

    // Set 'prev' to the sentinel node
    let prev = senitel;

    // Move 'prev' to the node just before the one we want to remove
    // We stop at (length - n) to get the previous node
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }

    // Skip the target node by adjusting the next pointer
    prev.next = prev.next.next;

    // Return the new head of the modified list (skipping sentinel)
    return senitel.next;
};

// Approach 2 : Two Pointer Method (Optimal Time Complexity)
var removeNthFromEnd = function(head, n) {
    let senitel = new ListNode(0,head);
    let first = senitel;
  
    for(let i=0;i<n;i++){
      first = first.next;
    }
  
    let second = senitel;
    while(first.next !=null){
      first = first.next;
      second=second.next;
    }
    second.next = second.next.next
    return senitel.next;
  
  
  };