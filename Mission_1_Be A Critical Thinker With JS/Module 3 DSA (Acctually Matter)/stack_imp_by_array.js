/* 
Todos: 
1. Implement a Stack class using an array.
2. Include methods for push, pop, peek, isEmpty, and size.
3. Ensure proper error handling for popping from an empty stack.
4. Write comments explaining each method.
*/

class Stack {
  constructor() {
    this.items = []; // Initialize an empty array to hold stack elements
  }
  // Method to add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot pop from an empty stack.");
    }
    return this.items.pop();
  }
  //Method to Peek at the top element
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty. Cannot peek.");
    }
    return this.items[this.items.length - 1];
  }

  // Method to check the empty status of the stack
  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); 
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());