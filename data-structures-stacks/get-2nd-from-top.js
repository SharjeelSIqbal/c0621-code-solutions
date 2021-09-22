/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const first = stack.pop();
  if (typeof first === 'undefined') {
    return undefined;
  }
  const second = stack.pop();
  if (typeof second === 'undefined') {
    stack.push(first);
    return undefined;
  } else {
    stack.push(second);
    stack.push(first);
  }
  return second;
}
