
// time - O(n)
// space - O(1)
var reverseList = function(head) {
    if(!head) return null;
    let prev = null;
    while(head){
       [head.next, prev, head] = [prev, head, head.next]
    }
    return prev;
};


// time - O(n)
// space - O(1)
var reverseList = function(head) {
    if(!head) return null;
    let current = head;
    let  next = null;
    let prev = null;

    while(current){
       next = current.next;
       current.next = prev;
       prev = current;
       current = next;
    }
    return prev;
};

// Recursion way
var reverseList = function(head) {
    if(!head) return null;
    let next = head.next;
    head.next = prev;
    return reverseList(next, head)
};
// time - O(n)
// space - O(n)