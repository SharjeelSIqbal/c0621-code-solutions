/* exported takeTop */

function takeTop(stack) {
  if (!stack) {
    return stack.peek();
  } else {
    return stack.pop();
  }
}
