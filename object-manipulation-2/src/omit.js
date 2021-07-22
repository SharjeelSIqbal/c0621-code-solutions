/* exported omit */
function omit(source, keys) {
  var newObj = {};
  var keyArr = Object.getOwnPropertyNames(source);
  for (var i = 0; i < keyArr.length; i++) {
    if (!keys.includes(keyArr[i])) {
      newObj[keyArr[i]] = source[keyArr[i]];
    }
  }
  return newObj;
}
