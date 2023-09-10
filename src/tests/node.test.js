//import test from "node:test";
import { Node } from "../node.js";

test("1: Create node", () => {
  let newNode = Node();
  expect(newNode).toMatchObject({
    value: null,
    nextNode: null,
  });
});
