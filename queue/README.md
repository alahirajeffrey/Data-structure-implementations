## Queues

A queue is a simple data structure that works on a first-in, first-out (FIFO) principle. This means that the first element added is the first to be removed just like in the case of a queue of people waiting to purchase an item

## Practical Use Cases

- **Task Scheduling**: such as in the case of documents to be printed by a printer in the order they were submitted or managing processess to be executed in an operating system.
- **Real-Time Systems**: managing events in a system where events are processed in the order they occur.
- **Data Buffering**: storing packets of data in a network router as they arrive and processing them in order.
- **Event Processing**: nodejs has an event queue that sores incoming client requets which are then processed by the event loop in the order which they come in
