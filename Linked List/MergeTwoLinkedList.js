// LeetCode Problem -> 21 
// Merge Two Linked List 


var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    // While both lists are non-null
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    // Attach the remaining nodes
    curr.next = list1 || list2;

    return dummy.next;
};
