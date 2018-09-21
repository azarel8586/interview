class QueueFromStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  
  enqueue(item) {
    this.inStack.push(item);
  }
  
  dequeue() {
    if (this.outStack.length === 0) {
      // reverse the fucker!
      while (this.inStack.length > 0) {
        let temp = this.inStack.pop();
        this.outStack.push(temp); 
      }
      
      if (this.outStack.length === 0) throw new Error('add something to the queue first :-P');
    }
    return this.outStack.pop();
  }
}

var queue = new QueueFromStacks;
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

// now...
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
