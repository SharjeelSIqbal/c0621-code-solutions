/* exported maxValue */

function maxValue(stack) {
  if (typeof stack.peek() === 'undefined') {
    return -Infinity;
  }
  let i = stack.peek();
  while (typeof stack.peek() !== 'undefined') {
    if (i < stack.peek()) {
      i = stack.peek();
    }
    stack.pop();
  }
  return i;
}
