/* exported isEmpty */

function isEmpty(stack) {
  if (typeof stack.peek() === 'undefined') {
    return true;
  }
  return false;
}
