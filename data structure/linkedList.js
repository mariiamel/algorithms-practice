class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);
        if(this.head.next){
            this.head.next = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let [pointer, popedNode] = [this.head, undefined];
        while(pointer.next.next){
            pointer = pointer.next;
        }
        this.tail = pointer;
        poppedNode = pointer.next;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = 0;
        }
        return poppedNode;
    }
}


const list = new LinkedList()
list.push(5)
list.push(3)
list.push(2)
list.pop()