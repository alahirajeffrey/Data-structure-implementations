class Stack {
  constructor() {
    this.items = [];
  }

  // check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // push a new element to the stack
  push(item) {
    this.items.push(item);
    return `${item} added to stack`;
  }

  // remove the last element placed in the stack
  pop(item) {
    if (!this.isEmpty()) {
      this.items.pop();
      return "Item removed from stack";
    } else {
      throw new Error("Empty stack");
    }
  }

  // look at the last element in the stack
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error("Empty stack");
    }
  }

  // get the size of the stack
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
