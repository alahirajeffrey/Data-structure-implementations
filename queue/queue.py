class Queue:
    def __init__(self) -> None:
        self.items = []

    ## add element to the end of the queue
    def enqueue(self, item):
        self.items.append(item)
        return f"{item} added to queue"

    ## remove first element from the beginning of the queue
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            raise IndexError("Empty queue") 
        
    ## check if queue is empty
    def is_empty(self):
        return len(self.items) == 0

    ## check first element of the queue
    def peek(self):
        if not self.is_empty():
            return self.items[0]
        else:
            raise IndexError("Empty queue") 

    ## check size of queue
    def size(self):
        return len(self.items)
        
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

print(queue.dequeue())  
print(queue.peek())     
print(queue.size())     