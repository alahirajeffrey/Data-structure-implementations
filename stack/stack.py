class Stack:
    def __init__(self) -> None:
        self.items = []

    ## push element to the top of the stack
    def push(self, item):
        self.items.append(item)
        return f"{item} added to stack"

    ## remove element from the top of the stack
    def pop(self):
        if not self.is_empty():
            self.items.pop()
            return f"Item removed from stack"
        else:
            return IndexError("Empty stack")       

    ## get the size of the stack
    def size(self):
        return f"the stack has {len(self.items)} elements"

    ## look at the last element in the stack
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            return IndexError("Empty stack")

    ## check if stack is empty
    def is_empty(self):
        return len(self.items) == 0
        
stack = Stack()

print(stack.is_empty())
print(stack.push(10))
print(stack.push(12))
print(stack.push(3))
print(stack.size())
print(stack.peek())
print(stack.pop())
print(stack.peek())
print(stack.size())