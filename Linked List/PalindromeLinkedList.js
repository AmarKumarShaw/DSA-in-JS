//  Approach 2 ( recommended)
// Breaking the Linked List using slow and fast pointer
// into two parts and then  comparing it accordingly

var isPalindrome = function(head) {
    let arr =[];
    let curr = head;
    while(curr){
        arr.push(curr.val);
        curr = curr.next
    }
    let left = 0;
    let right = arr.length-1;
    while(left<right) {
        if(arr[left++]!=arr[right--])return false;
    }
    return true
};

//  Approach 1 (Not recommended): Converting Linked List to array and then seeing that
var isPalindrome = function(head) {
    // Finding the middle the palindrome using slow and fast pointer
    let slow = head;
    let fast =head
    while(fast && fast.next){
        slow = slow.next;
        fast =fast.next.next
    }

    // Reversing the second half part 
    let prev =null;
 
    while(slow){
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // Now we need to compare first and second halves
    let first=head;
    let second = prev;

    while(second){
        if(first.val != second.val) return false;
       first = first.next;
       second = second.next;
    }
return true

};