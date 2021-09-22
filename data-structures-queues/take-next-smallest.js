/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  let first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }

  while (first >= queue.peek()) {
    queue.enqueue(first);
    first = queue.dequeue();
  }
  return first;
}
