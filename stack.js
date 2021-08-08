class Stack {
    constructor(value) {
        this.head = null;
        this.size = 0
        this.value = value
        this.next = null
    }
    push(val) {
        const node = new Node(val);
        node.next = this.head
            this.head = node;
            ++this.size;
            return this.size;
    }
}

s = new Stack()
s.push(516)
console.log(s)