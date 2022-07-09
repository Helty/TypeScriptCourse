class Item {
    constructor(
        public value: number,
        public prev: Item|null
    ) {
    }
}

class Stack {
    private head: Item|null = null;

    public push(value: number) {
        this.head = new Item(value, this.head)
    }

    public pop() {
        if (this.head) {
            const value = this.head.value;
            this.head = this.head.prev
            return value;
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
