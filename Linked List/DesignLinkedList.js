// LeetCode Problem No -> 707 
// Design a Linked List  Medium Level Problem
// Very Important 
function Node(val) {
    this.val = val;
    this.next = null;
  }
  
  var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
  };
  
  /** 
   * @param {number} index
   * @return {number}
   */
  MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) curr = curr.next;
    return curr.val;
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtHead = function(val) {
    // Creating a new node 
    let newNode = new Node(val);
    // Creating a new Head 
    newNode.next = this.head;
    // Pointing the Head to the new Node 
    this.head = newNode;
    // Now increasing the size of the node by 1
    this.size++;
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtTail = function(val) {
    // Create a Node 
    let newNode = new Node(val);
    // If Head is null then assign new Node to Head itself
    if(this.head == null){
      this.head = newNode;
    } else {
      // Define the head of the node
      let curr = this.head;
      // Check if the node is empty or not
      while (curr.next != null){
        curr = curr.next;
      }
      curr.next = newNode; // ✅ Fix: assign newNode only once
      // Once you find the null means the last node whose 
      // value is generally null make assign the newNode value there
    }
    // Increase the size of the node here by 1 
    this.size++;
  };
  
  /** 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size || index < 0) return; // ✅ FIXED: Prevent invalid access
    // Creating a new node 
    let newNode = new Node(val);
    // check if they are asking head or tail position to add
    // means to add front or end then use existing head and tail function 
  
    // For adding in the head 
    if(index == 0){
      this.addAtHead(val);
      return;
    }
    // For adding in the tail 
    else if(index === this.size){
      this.addAtTail(val);
      return;
    } else {
      // First Assign the curr to head for moving from there 
      let curr = this.head;
      // We run a loop index -1. so that we reach and stop 
      // one step before the target so that the target become the target index and make sure it work
      for(let i = 0; i < index - 1; i++){
        curr = curr.next;
      }
      // First connect the new node to the next one 
      newNode.next = curr.next;  // ✅ Fix: connect newNode to curr.next
      // Then assign the previous node so that it will        
      // be connected 
      curr.next = newNode;       // ✅ Fix: connect curr to newNode
    }
    this.size++;
  };
  
  /** 
   * @param {number} index
   * @return {void}
   */
  MyLinkedList.prototype.deleteAtIndex = function(index) {
    // Handing the basic corner case of handling index is there or not
    if(index < 0 || index >= this.size) return;  // ✅ Fix: return void instead of -1
  
    // Start from the Head means the first index
    let curr = this.head;
    // Run loop and find index-1 of the target 
    if(index == 0){
      this.head = this.head.next;
    } else {
      for(let i = 0; i < index - 1; i++){
        curr = curr.next;
      }
      // Then to delete index element just link index-1 means the previous one 
      // with the next of the next element which just skipping the next element 
      // so automatically one's link breaks it will be removed 
      curr.next = curr.next.next;
    }
    this.size--;
  };
  