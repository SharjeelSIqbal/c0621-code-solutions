/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }
  if (queue.peek() >= first) {
    const second = queue.dequeue();
    queue.enqueue(second);

    return first;
  }
  if (queue.peek() < first) {
    const second = queue.peek();
    queue.enqueue(first);
    queue.dequeue();
    return second;
  }

}
