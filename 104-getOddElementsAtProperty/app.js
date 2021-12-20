function getOddElementsAtProperty(obj, key) {
  if (typeof obj[key] == "undefined" || typeof obj[key] != "object" || obj[key].length == 0) {
    return [];
 }

 return obj[key].filter(function(value, index) {
  return value % 2 != 0;
 });
}

var obj = {
  key: [1, 2, 3, 4, 5]
};

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]