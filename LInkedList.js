//node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //push method

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //pop method
  pop() {
    if (!this.head) {
      return undefined;
    }
    if (!this.head.next) {
      const temp = this.head;
      this.head = null;
      this.length--;
      return temp;
    } else {
      let temp = this.head;
      let pre = null;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      return temp;
    }
  }

  //unshift method

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //shift method

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  //get method
  get(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      temp = this.head;
      for (i = 0; i > index; i++) {
        temp = temp.next;
      }
      return temp;
    }
  }
  //set method
  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(7);
