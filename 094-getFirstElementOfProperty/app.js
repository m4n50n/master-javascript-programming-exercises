function getFirstElementOfProperty(objeto, key) {
    //return objeto[key][0];
    return objeto[key].shift();
}


var obj = {
    key: [1, 2, 4]
};

var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1