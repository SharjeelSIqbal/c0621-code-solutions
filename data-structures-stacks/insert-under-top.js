/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (typeof stack.peek() === 'undefined') {
    return undefined;
  }
  const first = stack.pop();
  stack.push(value);
  stack.push(first);

}
