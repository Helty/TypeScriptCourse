class Stack {
    private items: number[] = [];
    public push(value: number) {
        this.items.push(value)
    }
    public pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
