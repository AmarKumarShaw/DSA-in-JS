// LeetCode Problem Number  -> 876 
// Middle of the Linked list 

// The slow and fast pointer approach is used to find the middle of a linked list efficiently.
// It uses two pointers:

// The slow pointer moves one node at a time.

// The fast pointer moves two nodes at a time.

// When the fast pointer reaches the end, the slow pointer will be at the middle.
// This approach runs in O(n) time and O(1) space.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast != null && fast.next !=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};