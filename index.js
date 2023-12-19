class ListNode {
  value;
  next;
  
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const hasNode = (head) => {
  if (head === null) {
    return false
  }
  
  let slow = head;
  let fast = head;
  
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if(fast === slow) {
      return true
    }
  }
  
  return false
}


const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second;

console.log(hasNode(head))
