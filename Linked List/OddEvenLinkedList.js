// LeetCode Problm No -> 328
// Odd Even Linked List 

var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head

};