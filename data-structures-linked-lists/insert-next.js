/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {

  const ll = new LinkedList(value);
  ll.next = list.next;
  list.next = ll;
}
