/* exported takeFront */

function takeFront(queue) {
  if (typeof queue === 'undefined') {
    return undefined;
  }
  const first = queue.peek();
  queue.dequeue();
  return first;
}
