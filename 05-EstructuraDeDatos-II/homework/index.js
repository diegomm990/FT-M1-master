function List() {
    this.head = null;
    this._length = 0;
}

function Node(value){
    this.value = value;
    this.next = null;
    this.previous = null;
}

const list = new List();

List.prototype.add = function(value){
    const newNode = new Node(value);
    let current = this.head;
    if(!current){
        current = newNode;
        this._length++;
        return newNode;
    } else {
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
        this._length++;
        return newNode;
    }
}

list.add(5);
list.add(20);

console.log(list.head.next.value);