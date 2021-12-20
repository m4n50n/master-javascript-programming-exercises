var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  if (typeof obj[key] != "undefined" && typeof obj[key] == "object" && obj[key].length != 0) {
    return obj[key].sort().pop();
  }
  
  return [];
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4