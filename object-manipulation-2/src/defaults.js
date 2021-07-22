/* exported defaults */
function defaults(target, source) {
  var targProp = Object.getOwnPropertyNames(target);
  var sourceProp = Object.getOwnPropertyNames(source);
  for (var i = 0; i < sourceProp.length; i++) {
    if (!targProp.includes(sourceProp[i])) {
      target[sourceProp[i]] = source[sourceProp[i]];
    }
  }
}
