import { LinkedList } from "../linkedlist.js";
import { Node } from "../node.js";

test("1: Create linked list", () => {
  let newList = LinkedList();
  expect(newList).toMatchObject({
    value: null,
    nextNode: null,
  });
});

test("2: Append empty list", () => {
  let newList = LinkedList();
  newList.append(5);
  expect(newList).toMatchObject({
    value: 5,
    nextNode: null,
  });
});
