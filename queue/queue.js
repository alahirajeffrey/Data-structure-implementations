class Queue {
  constructor() {
    this.items = [];
  }

  // add element to end of queue
  enqueue(item) {
    this.items.push(item);
    return `${item} added to queue`;
  }

  // remeove first element in queue
  dequeue() {
    if (!this.isEmpty()) {
      const removedItem = this.items.shift();
      return `${removedItem} removed from queue`;
    } else {
      throw new Error("Empty queue");
    }
  }

  // check if queue is empty
  isEmpty() {
    return this.size() === 0;
  }

  // check the last element in the queue
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      throw new Error("Empty queue");
    }
  }

  // get size of queue
  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());
