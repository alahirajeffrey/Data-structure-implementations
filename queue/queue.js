class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
    return `${item} added to queue`;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const removedItem = this.items.shift();
      return `${removedItem} removed from queue`;
    } else {
      throw new Error("Empty queue");
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      throw new Error("Empty queue");
    }
  }

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
