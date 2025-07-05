//  Approach 1 (Not recommended): Converting Linked List to array and then seeing that
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