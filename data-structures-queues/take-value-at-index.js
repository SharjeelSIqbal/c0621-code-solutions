/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  let first;
  for (let i = 0; i < index + 1; i++) {
    first = queue.dequeue();
    if (typeof queue.peek() === 'undefined') {
      return first;
    }
    if (i !== index) {
      queue.enqueue(first);
    }
  }
  return first;

}
