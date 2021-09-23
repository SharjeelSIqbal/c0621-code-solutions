/* exported getLength */

function getLength(list) {
  let i = 1;
  if (list.next === null) {
    return 1;
  }
  while (list.next !== null) {
    i++;
    list = list.next;
  }
  return i;
}
