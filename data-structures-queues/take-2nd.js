/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  const first = queue.dequeue();

  if (typeof queue.peek() === 'undefined') {
    return first;
  } else {
    queue.enqueue(first);
    const second = queue.dequeue();
    return second;
  }

}
