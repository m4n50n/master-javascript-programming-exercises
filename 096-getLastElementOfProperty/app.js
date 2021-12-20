const getLastElementOfProperty = (objeto, key) => {
    let o = objeto[key];
    return o[o.length -1];
}

var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5