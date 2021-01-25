class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        // creating new node
        newNode = new Node(value);
        // forming connection from newNode to current head node
        newNode.next = this.head;
        // reassigning this Singly Linked List's head to newNode
        this.head = newNode;
        // returning this, allowing for chaining methods
        return this
    }
    // a method for viewing our list
    view() {
        // will have to see all of the nodes...
        // starting from the beginning of our list
        let currentNode = this.head;
        // as long as currentNode exists, or is NOT null
    }
}