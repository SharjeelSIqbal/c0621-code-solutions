/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  const first = queue.peek();
  queue.dequeue();
  queue.enqueue(first);
  return queue;
}
