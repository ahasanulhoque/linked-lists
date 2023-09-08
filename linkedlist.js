import { Node } from "./node.js";

const LinkedList = () => {
  const append = (value) => {
    let newNode = Node();
    newNode.value = value;
    if (this.head == undefined) {
      head: newNode;
    } else {
      let currentNode = head;
      const recursiveNodeCheck = (currentNode) => {
        if ((currentNode.nextNode = null)) {
          currentNode.nextNode = newNode;
        } else recursiveNodeCheck(currentNode.newNode);
      };
    }
  };

  const prepend = (value) => {
    let newNode = Node();
    newNode.value = value;
    if (this.head == undefined) {
      head: newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };
};
