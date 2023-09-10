import { Node } from "./node.js";

const LinkedList = function LinkedListConstructor() {
  let value = null;
  let nextNode = null;

  const append = (newValue) => {
    let newNode = Node();
    newNode.value = newValue;

    if (value == null) {
      //If no head, add the new node as the head
      value = newNode.value;
      console.log(value);
      nextNode = newNode.nextNode;
    } else {
      //If there is a head, recursively check for the next node until
      //a nextNode value of null is found. Replace it with the new node
      let currentNode = {
        value: value,
        nextNode: nextNode,
      };
      const recursiveNodeCheck = (currentNode) => {
        if ((currentNode.nextNode = null)) {
          currentNode.nextNode = newNode;
        } else recursiveNodeCheck(currentNode.nextNode);
      };
    }
  };

  const prepend = (value) => {
    let newNode = Node();
    newNode.value = value;

    if (value == null) {
      //If there is no head, add the new node as the head
      value = newNode.value;
      nextNode = newNode.nextNode;
      console.log(value);
    } else {
      /*
      //If there is a head, change its nextNode value to point to the current head
      //Then change the head value to the newNode value
      this.nextNode = this.head;
      this.value = newNode.value;
      */
    }
  };

  /*
  const size = () => {
    count = 0;
  }

  const head = () => {

    return { value, nextNode }
  }
  */
  return {
    value,
    nextNode,
    append,
    prepend,
    get value() {
      return value;
    },
    get nextNode() {
      return nextNode;
    },
  };
};

export { LinkedList };
